import {Fragment, useEffect, useState} from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DefaultImages } from "../../utils/default-images";
import { Button } from "./button";
import {Link, useNavigate} from "react-router-dom";
import {Login} from "../auth/login";
import axios from "axios";
import {BackendPaths} from "../../router/backend-paths";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About IMX", href: "#", current: false },
  { name: "Discover", href: "#", current: false },
  { name: "News & Events", href: "#", current: false },
  { name: "Add Project", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  let [loginOpen, setLoginOpen] = useState(false)
  const [user, setUser] = useState<any>({});
  let navigate = useNavigate();

  useEffect(() => {
    (
      async () => {
        let user: any | undefined
        try {
          const {data} = await axios.get(BackendPaths.toUser())
          setUser(data);
        } catch (e: any) {
          setUser(undefined);
        }
      }
    )()
  }, [])

  const logout = async () => {
    await axios.post(BackendPaths.toLogout());
    navigate(0)
  }

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const loginButton = (styling?: string) => (
    <Button outlined className={styling} onClick={() => user ? logout() : setLoginOpen(true)}>
      {user ? "Logout" : "Login"}
    </Button>
  );

  return (
    <Disclosure as="nav" className="bg-primary text-white relative z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-8 w-8 text-gray-100"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-8 w-8 text-white "
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between w-full">
                <Link to={"/"}>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="block h-20 w-auto lg:hidden"
                      src={DefaultImages.GALAXIE_FULL_LOGO}
                      alt="Galaxie"
                    />
                    <img
                      className="hidden h-20 w-auto lg:block"
                      src={DefaultImages.GALAXIE_FULL_LOGO}
                      alt="Galaxie"
                    />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-secondary" : "text-gray-100",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                {loginButton("hidden md:flex")}
              </div>
            </div>
          </div>

          <Transition appear show={loginOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleLoginClose}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Login onClose={handleLoginClose}/>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "text-secondary" : "text-gray-100",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {loginButton()}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
