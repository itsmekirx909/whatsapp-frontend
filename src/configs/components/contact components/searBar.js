

export default function SearchBar(){
    
        return(
            <div className="flex">
    
                <label className="searchbar">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" width={20} height={20} />
                    <input type="search" className="searchinput" placeholder="Search Contacts" />
                </label>

                <div>
                    <img src="https://static.thenounproject.com/png/1245151-200.png" width={30} height={30} className="filter" />
                </div>
    
            </div>
        )
    }