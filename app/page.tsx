import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";

import MovieList from "Components/UI/HomePage/MovieList";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function Home() {
  return (
    <>
      {/* <FinalUIRender /> */}
      <MovieList />
    </>
  );
}
