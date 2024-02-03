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
import { redirect } from "next/navigation";
import { GET_PRODUCTS } from "@/lib/queries";
import { getClient } from "@/lib/client";
const Home = async () => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GET_PRODUCTS,
  });
  console.log("🚀 ~ Home ~ data:", data);

  return (
    <div>
      <Caraousel />
      <HomeProductCategoryHeader />

      {/* Cards Row */}
      <div className="flex flex-wrap justify-start gap-4 p-4">
        {data?.products_product?.map((item) => {
          return (
            <ProductCard key={item.id} label={item.label} price={item?.price} />
          );
        })}
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
};
export default Home;
