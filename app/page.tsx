"use client";

import Caraousel from "@/components/Caraousel";
import HomeProductCategoryHeader from "@/components/HomeProductCategoryHeader";
import ProductCard from "@/components/ProductCard";
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
      <HomeProductCategoryHeader />

      {/* Cards Row */}
      <div className="flex flex-wrap justify-start gap-4 p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
