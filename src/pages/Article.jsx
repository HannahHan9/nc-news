import {State} from "react";

const Article = () => {

    useEffect(() => {
        getAllItems(selectedCategory).then((itemsFromApi) => {
          setAllItems(itemsFromApi);
          setIsLoading(false);
        });
      }, []);
    return (
        <>
       
        
        </>
    )
}




export default Article;