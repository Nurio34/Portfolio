export default {
    header: function () {
        return `
        <div class="logo text-3xl row-start-1 row-end-2">Nurio34</div>
        <nav class="main-nav hidden row-start-1 row-end-2
        md:block">
            <ul class="flex gap-4">
                <li><button>Projects</button></li>
                <li><button>About</button></li>
                <li><button>Services</button></li>
                <li><button>Contact</button></li>
            </ul>
        </nav>
        <nav class="social-nav hidden row-start-1 row-end-2 
        md:block">
            <ul class="flex gap-4">
                <li>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-discord"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
        </nav>
        <div class="nav_container row-start-1 row-end-2 justify-self-end
        md:hidden
        ">
            <button class=" cursor-pointer"><i class="menuBtn fa-solid fa-bars"></i></button>
            <div class="navs absolute -z-50 right-0 bg-blue-700 shadow-2xl shadow-black rounded-md transition opacity-0 p-6
            grid justify-items-center gap-4">
                <nav class="main-nav ">
                    <ul>
                        <li><button>Projects</button></li>
                        <li><button>About</button></li>
                        <li><button>Services</button></li>
                        <li><button>Contact</button></li>
                    </ul>
                </nav>
                <nav class="social-nav">
                    <ul class="flex gap-2">
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-github"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-discord"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-twitter"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa-brands fa-linkedin"></i
                            ></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        `;
    },

    headerFunctions: function () {
        const menuBtn = document.querySelector(".menuBtn");
        menuBtn.addEventListener("click", (e) => {
            const navsContainer = document.querySelector(".navs");
            console.log(navsContainer);
            if (navsContainer.classList.contains("opacity-0")) {
                navsContainer.classList.remove("opacity-0", "-z-50");
                navsContainer.classList.add(
                    "opacity-1",
                    "translate-y-5",
                    "z-50",
                );
            } else {
                navsContainer.classList.add("opacity-0", "-z-50");
                navsContainer.classList.remove("opacity-1", "translate-y-5");
            }
        });
    },
};
