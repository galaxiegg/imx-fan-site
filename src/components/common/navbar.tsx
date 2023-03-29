import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DefaultImages } from "../../utils/default-images";
import { Button } from "./button";
import {Link} from "react-router-dom";

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
                <Button outlined className="hidden md:flex">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

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
              <Button outlined>Contact Us</Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
