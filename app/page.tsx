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
import { GET_HOME_PAGE_BASIC_DATA } from "@/lib/queries";
import { getClient } from "@/lib/client";
const Home = async () => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GET_HOME_PAGE_BASIC_DATA,
  });

  return (
    <div className="">
      <Caraousel carouselData={data?.sales_advertisement} />
      <HomeProductCategoryHeader />

      {/* Cards Row */}
      <div className="flex  gap-4 mb-5 overflow-x-auto py-5 px-2">
        {data?.products_product?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
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
