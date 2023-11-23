import articlesService from "../services/articles.api";
import TitlePage from "../components/UI/TitlePage";
import GridPosts from "../components/UI/GridPosts";

export default async function Home() {

  // on récupère les articles à l'aide du service articlesService
  const articles = await articlesService.getArticles();

  return (
    <div className="container">
      {/* on utilise le composant TitlePage */}
      <TitlePage title="Accueil" />
      {/* on utilise le composant GridPosts */}
      <GridPosts articles={articles?.results} />
    </div>
  )
}