var element = document.getElementById('navLinkBox');

        document.getElementById('navToggle').addEventListener("click", expandNav);

        function expandNav() {
            element.classList.toggle("hidden");
        }