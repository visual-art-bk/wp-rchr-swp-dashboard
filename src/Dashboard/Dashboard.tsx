import "./dashboard.module.css";
import TopAppBar from "./TopAppBar/TopAppBar";
import MainPage from "./MainPage/MainPage";
export default function Dashboard() {
  return (
    <div className="wp-rhr-swp-dashboard" prefix="_dash-er-32">
      <TopAppBar></TopAppBar>
      <MainPage></MainPage>
    </div>
  );
}
