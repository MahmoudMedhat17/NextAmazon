import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SearchIcon } from "lucide-react";
import {APPNAME} from "@/lib/constants";  

const Search = async() => {

    const categories = ["Men", "Women", "kids","accessories"];

  return (
    <form action="/search" method="GET" className="flex items-stretch h-10">
        <Select name="category">
          <SelectTrigger className="w-auto h-full rounded-l-md rounded-r-none rtl:rounded-r-md rtl:rounded-l-none text-black dark:border-gray-200 bg-gray-100">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="All">All</SelectItem>
            {
                categories.map((category)=>(
                    <SelectItem key={category} value={category}>
                        {
                          category
                        }
                    </SelectItem>
                ))
            }
          </SelectContent>
        </Select>
        <Input placeholder={`Search site ${APPNAME}`} className="h-full flex-1 bg-gray-100 dark:border-gray-200 text-black rounded-none text-base" name="q" type="search"/>
        <Button type="submit" className="bg-primary text-primary-foreground text-black h-full rounded-s-none rounded-e-md px-3 py-2">
          <SearchIcon className="w-6 h-6"/>
        </Button>
    </form>
  )
}

export default Search