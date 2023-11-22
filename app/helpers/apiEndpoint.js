const API_ENDPOINTS = {
  HOME_PAGE:
    "/api/page?[populate][0]=hero_section.image&populate[1]=buttons.&populate[2]=award.image&populate[3]=our_clients.image&populate[4]=why_choose&populate[5]=why_choose_content.image&populate[6]=service_offering.image&populate[7]=service_offering_fields.icon_image&populate[8]=sharad_patney.image&populate[9]=success_story_blogs.image&populate[10]=success_story_content.image&populate[11]=testimonial&populate[12]=testimonial_content.image&populate[13]=home_blogs&populate[14]=home_blog_content.image&populate[15]=teach_stacks_header&populate[16]=tech_stacks.tech_stacks_content&populate[17]=tech_stacks.tech_language.icon&populate[18]=hero_section.banner_btn.icon&populate[19]=seo.metaImage",
  ABOUT_US_PAGE:
    "/api/about-page?[populate][0]=About_company.image&populate[0]=About_company.list&populate[1]=VLink_Apart&populate[2]=VLink_Apart.VLink_Apart_Content.icon&populate[3]=our_mission.image&populate[4]=our_mission.image1&populate[5]=Diversity_Inclusion&populate[6]=Our_Journey.Our_Journey_content&populate[7]=our_team.team_member&populate[8]=our_team.team_member.image&populate[9]=our_advisors.advisors_details.image&populate[10]=seo.metaImage",
  CONTACT_US:
    "/api/contact-us?[populate][0]=section1&populate[1]=section2&populate[2]=section4.address.image&populate[3]=section4.address.icon1&populate[4]=section4.address.icon2&populate[5]=section4.address.icon3",
  SAVE_CONTACT_US: "/api/contact-forms",
  SAVE_GET_IN_TOUCH: "/api/get-in-touches",
  SAVE_GOT_A_REQUIREMENTS: "/api/got-a-requirements",
  SAVE_BLOG_FEEDBACK: "/api/blog-reply-forms",
  SAVE_WEBINAR_FORM: "/api/webinar-forms",
  SAVE_SUBSCRIBE: "/api/subscribes",
  SAVE_FOWARD_FRIEND: "/api/forward-friends",
  SAVE_APPLY_JOBS: "/api/apply-jobs",
  SERVICES_PAGE:
    "/api/service-page?[populate][0]=image&populate[1]=service_offering_header&populate[2]=service_offering.icon_image&populate[3]=working_process.image&populate[4]=working_process.working_process_steps&populate[5]=banner_btn.icon",
  DEDICATED_TEAMS_PAGE:
    "/api/dedicated-team?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_IT_STAFF_AUGMENTATION:
    "/api/managed-it-staffing-service?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",

  SERVICES_CUSTOM_SOFTWARE_DEVELOPMENT:
    "/api/custom-software-development-service?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_PRODUCT_ENGINEERING:
    "/api/software-product-engineering?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_WEB_DEVELOPMENT_SERVICES:
    "/api/web-development-service?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_MOBILE_APP_DEVELOPMENT:
    "/api/custom-mobile-app-development?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_MAINTENANCE_AND_SUPPORT:
    "/api/software-maintenance-and-support-service?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_QA_AND_Testing:
    "/api/qa-and-software-testing-service?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",

  SERVICES_DATA_AND_ANALYTICS:
    "/api/data-analytic?[populate][0]=section1.image&populate[1]=section2&populate[2]=section3.section3_detail.image&populate[3]=section4.section4_detail.image&populate[4]=section5.list.image&populate[5]=section6.section6_detail&populate[6]=section7&populate[7]=section8.section8_detail&populate[8]=section9.image&populate[9]=section9_content.section9_list&populate[10]=section10.section10_content&populate[11]=section11.faq_detail&populate[12]=section1.banner_btn.icon",
  SERVICES_RE_ENGINEERING_LEGACY_APPS_AND_PRODUCTS:
    "/api/re-engineering-software-product?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_DEVOPS_AND_AUTOMATION:
    "/api/dev-ops-and-automation?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_MACHINE_LEARNING_AND_AI:
    "/api/machine-learning?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_INTERNET_OF_THINGS:
    "/api/internet-of-thing?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_CLOUD_MANAGED:
    "/api/cloud-managed?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SERVICES_IT_CONSULTING:
    "/api/it-consulting?[populate][0]=team_section1.image&populate[1]=team_section2logo.image&populate[2]=team_section3&populate[3]=team_section4.team_section4detail.image&populate[4]=team_section4.team_section4detail.image_hover&populate[5]=team_section5.image&populate[6]=team_section6.team_section6detail.image&populate[7]=team_section7.image&populate[8]=team_section7.team_section7detail.image&populate[9]=team_section8.image&populate[10]=team_section8.our_developer_points&populate[11]=faq.faq_detail&populate[12]=team_section1.banner_btn.icon",
  SIDEBAR:
    "/api/sidebar?[populate][0]=image&[populate][1]=articles.article_detail.imge&[populate][2]=sidebar_section2.section2_details.image&[populate][3]=share_post.share.image",
  BLOGS:
    "/api/blog-details?populate[0]=section1.avatar&populate[1]=section1.image&populate[2]=section.blog_links&populate[3]=section2&populate[4]=section3.avatar&populate[5]=section4&populate[6]=blog_category&populate[7]=seo.metaImage",
  COMMON_BLOGS:
    "/api/blog-details?[populate][0]=section1.avatar&populate[1]=section1.image&populate[2]=section.blog_links&populate[3]=section2&populate[4]=section3.avatar&populate[5]=section4&populate[6]=banner.img&populate[7]=banner.auth_img&populate[8]=tab_content.list&populate[9]=side_share.social_list.icon&populate[10]=blog_details&populate[11]=ads_block.image&pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt%3Adesc&populate[12]=seo.metaImage",
  BLOG_CATEGORIES: "/api/blog-categories",
  CASE_STUDIES:
    "/api/case-study?[populate][0]=image&populate[1]=banner_btn.icon",
  INDUSTRIES:
    "/api/Industry?[populate][0]=image&populate[1]=section1.section1_detail.image&populate[2]=section2.image&populate[3]=success_story&populate[4]=success_story_content.image&populate[5]=industry_insights&populate[6]=banner_btn.icon&populate[7]=seo.metaImage",
  INDUSTRIES_LEARNING:
    "/api/industries-learning?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_HEALTHCARE:
    "/api/healthcare?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_FINANCE:
    "/api/financial-service?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon&populate[9]=finacialBanner&populate[10]=whyVlink.why_vlink_features.image&populate[11]=financialFaqs&populate[12]=fin_recent_blog&populate[13]=fin_tech_header&populate[14]=fin_tech_stacks.fin_tech_content&populate[15]=fin_tech_stacks.fin_tech_lang.icon",
  INDUSTRIES_MANUFACTURING:
    "/api/manufacturing?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_TELECOM:
    "/api/telecom?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_ECOMMERCE:
    "/api/e-commerce?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_MEDIA:
    "/api/media-and-entertainment?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",
  INDUSTRIES_CUSTOMER:
    "/api/consumer-technology?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=working_process.image&populate[5]=working_process.working_process_steps&populate[6]=success_story&populate[7]=success_story_content.image&populate[8]=section1.banner_btn.icon",

  BRANDS: "/api/client-logo?[populate][0]=images",
  OUR_CLIENTS: "/api/client-section?[populate][0]=client.image",
  OUR_PROCESS_PAGE:
    "/api/our-process?[populate][0]=section1.image&populate[1]=section2.image&populate[3]=section3.section3_content.image&populate[4]=section5&populate[5]=section6.VLink_Apart_Content.icon&populate[6]=sectiom6.section6_content.image&populate[7]=section1.banner_btn.icon",
  CASE_STUDIES_DETAILS: "/api/case-study-details/?[populate][0]=detail.image",
  CASE_STUDIES_DETAILS_PAGE:
    "/api/case-study-details/?[populate][0]=section.image&populate[1]=section1.image&populate[2]=section2.image&populate[3]=section3.section3_detail&populate[4]=section3.image&populate[5]=section4.section4_detail.image&populate[6]=section5.section5_detail&populate[7]=section6&populate[8]=section7&populate[9]=section0.lists.image&populate[10]=section0.lists.icon&populate[11]=pdf",
  NEWSROOM:
    "/api/newsroom?[populate][0]=image&populate[1]=section1.image&populate[2]=section2&populate[3]=section3.section3_detail.image&populate[4]=section3.section3_detail.avatar&populate[5]=banner_btn.icon",
  COMMON_NEWSROOM:
    "/api/newsroom-stories?[populate][0]=image&pagination[page]=1&pagination[pageSize]=3",
  NEWSROOM_STORIES: "/api/newsroom-stories?[populate][0]=image",
  CRS: "/api/csr?[populate][0]=section1.image&populate[1]=image_section.image&populate[2]=section2.section2_content.image&populate[3]=section3.image&populate[4]=section3_detail.section3_list&populate[5]=diversity_section.image&populate[6]=section4.image&populate[7]=section1.banner_btn.icon",
  HIRE_DEVELOPERS:
    "/api/hire-developer?[populate][0]=section1.image&populate[1]=section2&populate[2]=section3.image&populate[3]=section3.section3_detail&populate[4]=section4&populate[5]=section4_content.section4_language.icon&populate[6]=section5.image&populate[7]=section5.section5_detail&populate[8]=section6.section_detail.image&populate[9]=section7.section7_detail&populate[10]=section8.faqs&populate[11]=hireDevPrices.section8_detail&populate[12]=section1.banner_btn.icon&populate[13]=section6.section6_detail&populate[14]=section6.section6_detail.image",
  HIRE_DEVELOPERS_DETAIL:
    "/api/developer-details?[populate][0]=section1.image&populate[1]=section1.list&populate[2]=section2.section2_detail.image&populate[3]=section3.image&populate[4]=section3.list1&populate[5]=image_section.image&populate[6]=image_section.contain_logo.image&populate[7]=section4.section4_detail.image&populate[8]=section5.image&populate[9]=section5.list2&populate[10]=section6.section6_detail.image&populate[11]=section7&populate[12]=section8.section8_detail&populate[13]=section9.section9_detail&populate[14]=section10.list3&populate[15]=section1.banner_btn.icon",
  CAREERS:
    "/api/career?[populate][0]=section1.image&populate[1]=section2.section2_content&populate[2]=section3.image&populate[3]=section3.section3_list&populate[4]=section4.section4_media.image&populate[5]=section5.image&populate[6]=section6.image&populate[7]=section7.image&populate[8]=section1.banner_btn.icon",
  //common
  AWARDS: "/api/client-logo?[populate][0]=images",
  TESTIMONIALS:
    "/api/testimonial?populate[0]=Testimonial&populate[1]=testimonial_content.image",
  FOOTER:
    "/api/footer?[populate][0]=footer_section2.footer_link&populate[1]=footer_section3.footer_services&populate[2]=footer_section4&populate[3]=footer_section5.gobal_locations&populate[4]=social_media.logo_image&populate[5]=footer_section5.awardImg.image",
  TRUSTED_BY_STARTUPS:
    "/api/trusted-by-startup?[populate][0]=Trusted_by_Startups.logo",
  SUCESS_STORIES:
    "/api/case-study-details/?[populate][0]=section.image&populate[1]=section1.image&populate[2]=section2.image&populate[3]=section3.section3_detail&populate[4]=section3.image&populate[5]=section4.section4_detail.image&populate[6]=section5.section5_detail&populate[7]=section6&populate[8]=section7&populate[9]=section0.lists.image&populate[10]=section0.lists.icon&pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt%3Adesc",
  // "/api/success-storie?[populate][0]=Success&populate[1]=success_story_content.image",
  HEADER:
    "/api/header?[populate][0]=menu.menu_name.image&populate[1]=menu.menu_sidebar.image",
  FAQ: "/api/faq?[populate][0]=section1.ques_ans&populate[1]=follow.image",
  TECHNOLOGY_PODCAST_DETAIL:
    "/api/podcast-details?%5Bpopulate%5D%5B0%5D=playlist_data.playlist_img&populate%5B1%5D=section.image&populate%5B2%5D=audio&sort[0]=playlist_data.episode%3Adesc",
  TECHNOLOGY_PODCAST:
    "/api/podcast?[populate][0]=section1.image&populate[1]=episode_section2.image&populate[2]=playlist.playlist_img&populate[3]=section3.section3_detail.image&populate[4]=section1.banner_btn.icon",
  WHITEPAPERS_DETAIL:
    "/api/whitepaper-details?[populate][0]=image&populate[1]=banner_btn.icon&populate[2]=pdf",
  WHITEPAPERS:
    "/api/whitepaper?[populate][0]=image&populate[1]=banner_btn.icon",
  BROCHURES_DETAIL: "/api/brochure-details?[populate][0]=image&populate[1]=pdf",
  BROCHURES:
    "/api/brochure?[populate][0]=Brochures_header&[populate][1]=image&populate[2]=banner_btn.icon",
  WEBINARS_DETAIL:
    "/api/webinar-details?[populate][0]=image&populate[1]=section1.banner_btn.icon",
  WEBINARS:
    "/api/webinar?[populate][0]=section1.image&populate[1]=section1.banner_btn.icon",
  IT_SERVICE_AT_MASSACHUSETS:
    "/api/massachusett?[populate][0]=section1.image&populate[1]=section2.image&populate[2]=section3.image&populate[3]=section3.section3_content.image&populate[4]=section4.image&populate[5]=section4.section4_content.image&populate[6]=section5.image&populate[7]=section6.section6_detail.image&populate[8]=team_section8.image&populate[9]=team_section8.our_developer_points&populate[10]=section1.banner_btn.icon",
  IT_SERVICE_AT_CONNECTICUT:
    "/api/connecticut?[populate][0]=section1.image&populate[1]=section2.image&populate[2]=section3.image&populate[3]=section3.section3_content.image&populate[4]=section4.image&populate[5]=section4.section4_content.image&populate[6]=section5.image&populate[7]=section6.section6_detail.image&populate[8]=team_section8.image&populate[9]=team_section8.our_developer_points",
  MASSACHUSETS_DATA:
    "/api/massachusett-data?[populate][0]=section1.image&populate[1]=section2.image&populate[2]=section3.image&populate[3]=section3.section3_content.image&populate[4]=section4.image&populate[5]=section4.section4_content.image&populate[6]=section5.image&populate[7]=section6.section6_detail.image&populate[8]=team_section8.image&populate[9]=team_section8.our_developer_points",
  MASSACHUSETS_WEB:
    "/api/massachusett-web?[populate][0]=section1.image&populate[1]=section2.image&populate[2]=section3.image&populate[3]=section3.section3_content.image&populate[4]=section4.image&populate[5]=section4.section4_content.image&populate[6]=section5.image&populate[7]=section6.section6_detail.image&populate[8]=team_section8.image&populate[9]=team_section8.our_developer_points",
  HIRE_DEVELOPERS_PROCESS:
    "/api/wiz-devs?[populate][0]=Quest1.Quest1_list&populate[1]=Quest2&populate[3]=Quest2_field.Quest2_list&populate[4]=Quest3.Quest3_list&populate[5]=Quest4.Quest4_list&populate[6]=Quest5&populate[7]=Quest6.image&populate[8]=location&populate[9]=location.label1Country&populate[10]=location.label2Country&populate[11]=location.label2Country&populate[12]=location.label3Country",
  HIRE_DEVELOPERS_PROCESS_POST:
    "/api/deskdev-forms?[populate][0]=Quest1&populate[1]=Quest2.Quest2_list&populate[2]=Quest3.Quest3_list&populate[3]=Quest4.Quest4_list&populate[4]=Quest5",
  SUCCESS_NUMBER:
    "/api/successful-num?[populate][0]=image&populate[1]=section1.image",
  SERVICE_OFFERINGS: "/api/offering?[populate][0]=service_offering.image",
  INDUSTRY_OFFERINGS: "/api/offering?[populate][0]=industry_offering.image",
  ZOHO_LEAD_GENERATION: "http://44.236.118.133:5000/api/save/lead",
  LCA_PAGE:
    "/api/lca-page?[populate][0]=table_headers&[populate][1]=table.media",
  DATA_WAREHOUSE:
    "/api/data-warehouse?[populate][0]=data_warehouse_hero.image&populate[1]=data_warehouse_hero.warehouse_list.image&populate[2]=warehouse_platform.image&populate[3]=warehouse_platform.platform_list.image&populate[4]=warehouse_platform.platform_images.image&populate[5]=Solutions.bg_img&populate[6]=Solutions.solution_list.icon&populate[7]=dataflow.image&populate[8]=dataflow.flowlist.image&populate[9]=cloud.image&populate[10]=cloud.cloud_btn.icon&populate[11]=Limitless.image&populate[12]=Limitless.cap_list.image&populate[13]=help.image&populate[14]=help.help_list.image&populate[15]=help.help_block.image&populate[16]=infrastructure.image&populate[17]=infrastructure.infra_block.image&populate[18]=customers.image&populate[19]=customers.testimonials.image&populate[20]=resources.image&populate[21]=resources.block.image&populate[22]=resources.block.btn_icon&populate[23]=warehouse_faq.image&populate[24]=warehouse_faq.faq_list&populate[25]=warehouse_faq.view_faqs&populate[26]=Get_in_touch.bg_img&populate[27]=Get_in_touch.gif_popup&populate[28]=Get_in_touch.gif_bg_img",
  GETINTOUCH_MODAL:
    "/api/get-in-touch-modal?[populate][0]=gifImage&[populate][1]=companyLogos.companyImg",
  GETINTOUCH_MODAL_FORM: "/api/touch-forms",
  IT_SERVICE_SERVICE:
    "/api/augmentation?[populate][0]=hero.image&[populate][1]=hero.banner_btn.icon&[populate][2]=choose.title_bg&[populate][3]=choose.main_bg&[populate][4]=choose.c_list.icon&[populate][5]=hiring.title_bg&[populate][6]=hiring.bg_img&[populate][7]=hiring.hiring_list.gif&[populate][8]=process.title_bg&[populate][9]=process.process_list.icon&[populate][10]=process.call_btn.gif&[populate][11]=cloud.image&[populate][12]=cloud.cloud_btn.icon&[populate][13]=expert.title_bg&[populate][14]=expert.bg_img&[populate][15]=expert.exp_list.icon&[populate][16]=expert.exp_list.btn_icon&[populate][17]=tech.title_bg&[populate][18]=tech.tags_list&[populate][19]=tech.tab_content.image&[populate][20]=industries.title_bg&[populate][21]=industries.industriesList.icon&[populate][22]=benefits.title_bg&[populate][23]=benefits.left_list.icon&[populate][24]=benefits.right_list.image&[populate][25]=resouce.image&[populate][26]=resouce.block.image&[populate][27]=resouce.block.btn_icon&[populate][28]=faqs.image&[populate][29]=faqs.faq_list&[populate][30]=faqs.viewFaq&[populate][31]=faqs.viewFaqIcon&[populate][32]=C_study.image&[populate][33]=C_study.case_list.image&[populate][34]=C_study.case_list.btn_icon&[populate][35]=customer.image&[populate][36]=customer.testimonials.image&[populate][37]=Get_in_touch.bg_img&[populate][38]=Get_in_touch.gif_popup&[populate][39]=Get_in_touch.gif_bg_img&[populate][40]=industries.bg_img&[populate][41]=tech.bg_img&[populate][42]=hiring.image&[populate][43]=hiring.help_block.image&[populate][44]=hero.bgImg",
  GETINTOUCH_DATA: "/api/get-data?populate=*",
  SINGLE_BLOG:
    "/api/single-blog?[populate][0]=list.image&populate[1]=popular_blog.image",
  SUPPLY_CHAIN:
    "/api/supply-chain?[populate][0]=hero_section.bgImage&populate[1]=hero_section.banner_btn.icon&populate[2]=blockchain&populate[3]=blockchain.blocks.image&populate[4]=crm_solution.bg_image&populate[5]=crm_solution.image&populate[6]=chooseUs.bg_image&populate[7]=chooseUs.chooseList.image&populate[8]=technologies.bg_image&populate[9]=technologies.centerImage&populate[10]=technologies.tech_list.image&populate[11]=tech_stack.title_bg&populate[12]=tech_stack.bg_img&populate[13]=tech_stack.tags_list&populate[14]=tech_stack.tab_content.image&populate[15]=Partner&populate[16]=Partner.reasonList.image&populate[17]=resouces.image&populate[18]=resouces.block.image&populate[19]=resouces.block.btn_icon&populate[20]=cloudBlock.image&populate[21]=cloudBlock.cloud_btn&populate[22]=Faqs.image&populate[23]=Faqs.faq_list&populate[24]=Faqs.view_faqs&populate[25]=Process.processList",
  BLOCK_CHAIN:
    "/api/blockchain?[populate][0]=Hero_section.bgImage&[populate][1]=Hero_section.image&[populate][2]=Hero_section.banner_btn.icon&[populate][3]=BlockChain.title_bg&[populate][4]=BlockChain.industriesList.icon&populate[5]=Process.processList&populate[6]=tech.title_bg&populate[7]=tech.bg_img&populate[8]=tech.tags_list&populate[9]=tech.tab_content.image&populate[10]=Partner&populate[11]=Partner.reasonList.image&populate[12]=resource.image&populate[13]=resource.block.image&populate[14]=resource.block.btn_icon&populate[15]=Cloud.image&populate[16]=Cloud.cloud_btn&populate[17]=service.serviceList&populate[18]=awards.awardList&populate[19]=awards.awardList.image&populate[20]=faqs.image&populate[21]=faqs.faq_list&populate[22]=faqs.view_faqs&populate[23]=seo.test_image",
  FRONTEND_DEVELOPMENT:
    "/api/front-end-development?[populate][0]=HeroSection.bgImage&[populate][1]=HeroSection.image&[populate][2]=HeroSection.banner_btn.icon&[populate][3]=services.image&[populate][4]=services.servicesList.icon&[populate][5]=Stories.image&[populate][6]=Stories.platform_btn.icon&[populate][7]=Stories.platform_list.image&[populate][8]=Stories.platform_list.btn_icon&[populate][9]=Stories.platform_images.image&[populate][10]=Requirements.blocks.image&[populate][11]=Technologies.image&[populate][12]=Technologies.techList.image&[populate][13]=WhyHire.reasonList.image&[populate][14]=Customers.image&[populate][15]=Customers.testimonials.image&[populate][16]=Blog.image&[populate][17]=Blog.block.image&[populate][18]=Blog.block.btn_icon&[populate][19]=GetInTouch.bg_img&[populate][20]=GetInTouch.gif_popup&[populate][21]=GetInTouch.gif_bg_img&[populate][22]=Faq.image&[populate][23]=Faq.faq_list&[populate][24]=Faq.faq_list&[populate][25]=Faq.view_faq_icon&[populate][26]=HireDevelopers.bgImage&[populate][27]=HireDevelopers.image&[populate][28]=Approach.bgImage&[populate][29]=Approach.list.icon",
  BACKEND_DEVELOPMENT:
    "/api/back-end-development?[populate][0]=HeroSection.bgImage&[populate][1]=HeroSection.image&[populate][2]=HeroSection.banner_btn.icon&populate[3]=Services&populate[4]=Services.reasonList.image&[populate][5]=Stories.image&[populate][6]=Stories.platform_btn.icon&[populate][7]=Stories.platform_list.image&[populate][8]=Stories.platform_list.btn_icon&[populate][9]=Stories.platform_images.image&[populate][10]=Technologies.image&[populate][11]=Technologies.techList.image&[populate][12]=Customers.image&[populate][13]=Customers.testimonials.image&[populate][14]=Blogs.image&[populate][15]=Blogs.block.image&[populate][16]=Blogs.block.btn_icon&[populate][17]=GetInTouch.bg_img&[populate][18]=GetInTouch.gif_popup&[populate][19]=GetInTouch.gif_bg_img&[populate][20]=Faqs.image&[populate][21]=Faqs.faq_list&[populate][22]=Faqs.faq_list&[populate][23]=Faqs.view_faq_icon&[populate][24]=Requirements.blocks.image&[populate][25]=Performance.reasonList.image&populate[26]=Process.serviceList&[populate][27]=Trusted.image&[populate][28]=Trusted.servicesList.icon&[populate][29]=WhyVlink.servicesList.icon",
};
export default API_ENDPOINTS;
