import { SearchBar } from "./Searchbar"
export const AppBar=()=> {
    return <div className="flex justify-between pt-1">
            <div className="text-md inline-flex itemss-center pb-2 ">
                Youtube
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                Sign In
            </div>
    </div>
}