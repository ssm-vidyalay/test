const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require('cors');
const cookieParser = require("cookie-parser");

const aboutusSSMV = require("./routes/aboutus_SSMV_routes");
const aboutusAnnualReport = require("./routes/aboutus_AnnualReport_routes");
const aboutusFounder = require("./routes/aboutus_Founder_routes");
const aboutusPrinciple = require("./routes/aboutus_Principle_routes");
const aboutusObjectives = require("./routes/aboutus_Objectives_routes");
const donate = require("./routes/donate_routes");
const grievances = require("./routes/grievances_routes");
const collegeAdministration = require("./routes/collegeAdministration_routes");
const managingCommittee = require("./routes/managingCommittee_routes");
const group = require("./routes/group_routes");
const coursema = require("./routes/course_BA_routes");
const courseba = require("./routes/course_MA_routes");
const serviceHostel = require("./routes/service_hostel_routes");
const serviceLibrary = require("./routes/service_library_routes");
const serviceComputerLab = require("./routes/service_computerLab_routes");
const serviceMess = require("./routes/service_mess_routes");
const serviceYoga = require("./routes/service_yoga_routes");
const alumniAbout = require("./routes/alumni_about_routes");
const alumniLatest = require("./routes/alumni_latest_routes");
const alumniSpotlight = require("./routes/alumni_spotlight_routes");
const alumniEvent = require("./routes/alumni_event_routes");
const alumniVideoGallery = require("./routes/alumni_videoGallery_routes");
const alumniGallery = require("./routes/alumni_gallery_routes");
const alumniTestinomial = require("./routes/alumni_testinomial_routes");
const admission = require("./routes/admission_routes");
const latest = require("./routes/latest_routes");
const notice = require("./routes/notice_routes");
const news = require("./routes/news_routes");
const user = require("./routes/user_routes");
const homeOnlineCourses = require("./routes/home_onlineCourses_routes");
const events = require("./routes/events_routes");
const gallery = require("./routes/gallery_routes");
const videoGallery = require("./routes/videoGallery_routes");



app.use(cors({ origin: ['http://localhost:3000','https://shree-syadvad-mahavidyalaya.github.io'], credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/ssmv", aboutusSSMV);
app.use("/ssmv", aboutusAnnualReport);
app.use("/ssmv", aboutusFounder);
app.use("/ssmv", aboutusPrinciple);
app.use("/ssmv", aboutusObjectives);
app.use("/ssmv", donate);
app.use("/ssmv", grievances);
app.use("/ssmv", collegeAdministration);
app.use("/ssmv", managingCommittee);
app.use("/ssmv", group);
app.use("/ssmv", coursema);
app.use("/ssmv", courseba);
app.use("/ssmv", serviceHostel);
app.use("/ssmv", serviceLibrary);
app.use("/ssmv", serviceComputerLab);
app.use("/ssmv", serviceMess);
app.use("/ssmv", serviceYoga);
app.use("/ssmv", alumniAbout);
app.use("/ssmv", alumniLatest);
app.use("/ssmv", alumniSpotlight);
app.use("/ssmv", alumniEvent);
app.use("/ssmv", alumniVideoGallery);
app.use("/ssmv", alumniGallery);
app.use("/ssmv", alumniTestinomial);
app.use("/ssmv", admission);
app.use("/ssmv", latest);
app.use("/ssmv", notice);
app.use("/ssmv", news);
app.use("/ssmv", user);
app.use("/ssmv", homeOnlineCourses);
app.use("/ssmv", events);
app.use("/ssmv", gallery);
app.use("/ssmv", videoGallery);

module.exports = app;