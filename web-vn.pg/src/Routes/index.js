import LandingPage from "../Page/HomePage/HomePage";
import AdChoices from "../Page/AdChoices/AdChoices.jsx";
import NotFoundPage from "../Page/NotFoundPage/NotFoundPage.jsx";
import ContactUs from "../Page/ContactUs/ContactUs.jsx";
import CrueltyFreePage from "../Page/CrueltyFreePage/layout.jsx";
import GenderEquality from "../Page/GenderEquality/GenderEquality.jsx";
import Investors from "../Page/Investors/Investors.jsx";
import Location from "../Page/Location/Location.jsx";
import PeopleWithDisabilities from "../Page/PeopleWithDisabilities/PeopleWithDisabilities.jsx";
import PolicyAndEnforcement from "../Page/PolicyAndEnforcement/PolicyAndEnforcement.jsx";
import ProductSafety from "../Page/ProductSafety/layout.jsx";
import Renewed from "../Page/Renewed/Renewed.jsx";
import SignInSignUp from "../Page/SignInSignUp/SignInSignUp.js";
import CommunityInfluence from "../Page/AnhHuongCongDong/index.js";
import Brands from "../Page/CacNhanHieu/index.js";
import WhoAreWe from "../Page/ChungToiLaAi/index.js";
import JobOpportunities from "../Page/CoHoiViecLam/index.js";
import ResponsibleBeauty from "../Page/LamDepCoTrachNhiem/index.js";
import BeOurPartner from "../Page/LamDoiTacVoiChungToi/index.js";
import Storage from "../Page/LuuTru/index.js";
import NhaDauTu from "../Page/NhaDauTu/index.js";
import PrivacyNotice from "../Page/ThongBaoBaoMat/index.js";
import New from "../Page/TinTuc/index.js";
export const routes = [
  {
    path: "/",
    page: LandingPage,
  },
  {
    path: "/AdChoices",
    page: AdChoices,
  },
  {
    path: "/ContactUs",
    page: ContactUs,
  },
  {
    path: "/CrueltyFreePage",
    page: CrueltyFreePage,
  },
  {
    path: "/GenderEquality",
    page: GenderEquality,
  },
  {
    path: "/Investors",
    page: Investors,
  },
  {
    path: "/Location",
    page: Location,
  },
  {
    path: "/PeopleWithDisabilities",
    page: PeopleWithDisabilities,
  },
  {
    path: "/PolicyAndEnforcement",
    page: PolicyAndEnforcement,
  },
  {
    path: "/ProductSafety",
    page: ProductSafety,
  },
  {
    path: "/Renewed",
    page: Renewed,
  },
  {
    path: "/SignInSignUp",
    page: SignInSignUp,
  },
  {
    path: "/CommunityInfluence",
    page: CommunityInfluence,
  },
  {
    path: "/Brands",
    page: Brands,
  },
  {
    path: "/WhoAreWe",
    page: WhoAreWe,
  },
  {
    path: "/JobOpportunities",
    page: JobOpportunities,
  },
  {
    path: "/ResponsibleBeauty",
    page: ResponsibleBeauty,
  },
  {
    path: "/BeOurPartner",
    page: BeOurPartner,
  },
  {
    path: "/Storage",
    page: Storage,
  },
  {
    path: "/NhaDauTu",
    page: NhaDauTu,
  },
  {
    path: "/PrivacyNotice",
    page: PrivacyNotice,
  },
  {
    path: "/New",
    page: New,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
