import React, { useEffect } from "react";




const SupportChat = ({}) => {

  useEffect(() => {

    const script = document.createElement("script");

    script.innerHTML = `(function (d, w, c) { if(!d.getElementById("spd-busns-spt")) { var n = d.getElementsByTagName('script')[0], s = d.createElement('script'); var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt"); s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "b82a33bf53b368c76dbd5a0ae6bb3f5307255149"); s.setAttribute("data-bot-hash", "bc4b6c6275a04cffa012179ecb28d91840193abf"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "in"); if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n); } }) (document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return {"cstmr::eml":"","cstmr::nm":""}; } }, function(successResponse) { }, function(errorResponse) { }); });`;

    const timer = setTimeout(() => {

      script.async = false;

      document.body.appendChild(script);

    }, 10000);

    // script.async = true;

    // document.body.appendChild(script);




    return () => {

      clearTimeout(timer);

      document.body.removeChild(script);

    };

  }, []);

  return <div></div>;

};

export default SupportChat;