import {createRouter, createWebHistory} from 'vue-router';

/** For  Website**/
import Index from '../components/website/Index'
import MentorDashboard from '../components/website/mentor/Index'
import BookingSummary from '../components/website/mentor/BookingSummary'
import ScheduleTimings from '../components/website/mentor/ScheduleTimings'
import MentorChat from '../components/website/mentor/Chat'
import MenteeList from '../components/website/mentor/MenteeList'
import MenteeProfile from '../components/website/mentor/MenteeProfile'
import MentorBlog from '../components/website/mentor/Blog'
import MentorBlogDetails from '../components/website/mentor/BlogDetails'
import MentorAddBlog from '../components/website/mentor/AddBlog'
import MentorEditBlog from '../components/website/mentor/EditBlog'
import Invoices from '../components/website/mentor/Invoices'
import InvoiceView from '../components/website/mentor/InvoiceView'
import MentorProfileSettings from '../components/website/mentor/ProfileSettings'
import Reviews from '../components/website/mentor/Reviews'
import MentorRegister from '../components/website/mentor/Register'
import SearchMentor from '../components/website/mentee/SearchMentor'
import MentorProfile from '../components/website/mentee/MentorProfile'
import Bookings from '../components/website/mentee/Bookings'
import Checkout from '../components/website/mentee/Checkout'
import BookingSuccess from '../components/website/mentee/BookingSuccess'
import MenteeDashboard from '../components/website/mentee/Index'
import Favourites from '../components/website/mentee/Favourites'
import MenteeChat from '../components/website/mentee/Chat'
import MenteeProfileSettings from '../components/website/mentee/ProfileSettings'
import ChangePassword from '../components/website/mentee/ChangePassword'
import MapGrid from '../components/website/mentee/MapGrid'
import MapList from '../components/website/mentee/MapList'
import MenteeRegister from '../components/website/mentee/Register'
import Bloglist from '../components/website/blog/BlogList'
import Bloggrid from '../components/website/blog/BlogGrid'
import VoiceCall from '../components/website/pages/Voicecall'
import VideoCall from '../components/website/pages/Videocall'
import Component from '../components/website/pages/Components'
import WebsiteBlankpage from '../components/website/pages/BlankPage'
import WebSiteLogin from '../components/website/pages/Login'
import RegisterPage from '../components/website/pages/Register'
import WebsiteForgotPassword from '../components/website/pages/ForgotPassword'
import Booking from '../components/website/Booking'
import Appointments from '../components/website/mentor/Appointments'
import DoctorMain from "../components/website/DoctorMain.vue";
import DoctorProfile from "../components/website/DoctorProfile.vue"

/** For  Admin**/
import Indexadmin from '../components/admin/index'
import Mentor from '../components/admin/mentor'
import Mentee from '../components/admin/mentee'
import Bookinglist from '../components/admin/bookinglist'
import Categories from '../components/admin/categories'
import Transactionlist from '../components/admin/transactionslist'
import Settings from '../components/admin/settings'
import Invoicereport from '../components/admin/invoicereport'
import Profile from '../components/admin/profile'
import Blog from '../components/admin/blog'
import Blogdetails from '../components/admin/blogdetails'
import Addblog from '../components/admin/addblog'
import Editblog from '../components/admin/editblog'
import Login from '../components/admin/login'
import Register from '../components/admin/register'
import Forgotpassword from '../components/admin/forgotpassword'
import Lockscreen from '../components/admin/lockscreen'
import Error404 from '../components/admin/error404'
import Error500 from '../components/admin/error500'
import Blankpage from '../components/admin/blankpage'
import Components from '../components/admin/components'
import Formbasicinputs from '../components/admin/formbasicinputs'
import Forminputgroups from '../components/admin/forminputgroups'
import Formhorizontal from '../components/admin/formhorizontal'
import Formvertical from '../components/admin/formvertical'
import Formmask from '../components/admin/formmask'
import Formvalidation from '../components/admin/formvalidation'
import Tablesbasic from '../components/admin/tablesbasic'
import Datatables from '../components/admin/datatables'
import Invoice from '../components/admin/invoice'

const routes = [
    {
        path: '/',
        name: 'login',
        component: WebSiteLogin
    },
    {
        path: '/pages/login',
        name: 'website-login',
        component: WebSiteLogin
    },
    {
        path: '/pages/doctor-main',
        name: 'doctor-main',
        component: DoctorMain
    },
    {
        path: '/pages/doctor-profile',
        name: 'doctor-profile',
        component: DoctorProfile
    },
    {
        path: '/pages/register',
        name: 'register-page',
        component: RegisterPage
    },
];

export const router = createRouter({
    history: createWebHistory(''),
    linkActiveClass: 'active',
    routes
});
