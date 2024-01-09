"use client";

import Caraousel from "@/components/Caraousel";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Caraousel />
      <div className="flex items-center justify-end p-4">
        <div>
          <Link href="#" underline="always">
            View All
          </Link>
        </div>
      </div>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-start gap-4 p-4">
        {/* Card 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="image1.jpg"
            alt="Card 1"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card 1</h3>
            <p className="text-gray-700">Description for Card 1.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="image2.jpg"
            alt="Card 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
            <p className="text-gray-700">Description for Card 2.</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="image2.jpg"
            alt="Card 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
            <p className="text-gray-700">Description for Card 2.</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="image2.jpg"
            alt="Card 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
            <p className="text-gray-700">Description for Card 2.</p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="image2.jpg"
            alt="Card 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
            <p className="text-gray-700">Description for Card 2.</p>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-end p-4">
        <div className="flex space-x-4">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Filter</Button>
            </DropdownTrigger>
            <DropdownMenu
              className="text-foreground"
              variant="flat"
              aria-label="Static Actions"
            >
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Sort By</Button>
            </DropdownTrigger>
            <DropdownMenu
              className="text-foreground"
              variant="flat"
              aria-label="Static Actions"
            >
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div> */}
    </div>
  );
}
