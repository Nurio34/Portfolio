import alerts from "./alert";
import API from "./API";

export default {
    home: function () {
        return `
        <header class=" bg-blue-700 text-white p-1 mb-1">
            <div class=" font-extrabold">Finddir</div>
        </header>

        <main class="flex flex-col items-center ">
            <form id="searchForm" class=" bg-gray-300 p-1 w-1/2">
                <fieldset class=" grid gap-1">
                    <h2 class=" font-semibold text-lg">Search Reddit</h2>
                    <label for="searchInp">
                        <input type="search" name="Search" id="searchInp" class=" w-full" />
                    </label>
                    <div class="radioGroup">
                        Sort By :
                        <label for="relevanceRadio">
                            <input
                                type="radio"
                                name="Radio"
                                id="relevanceRadio"
                                checked
                                value="Relevance"
                            />
                            Relevance
                        </label>
                        <label for="latestRadio">
                            <input type="radio" name="Radio" id="latestRadio" value="Latest" />
                            Latest
                        </label>
                    </div>
                    <select id="limitSelect">
                        <option value="limit" selected disabled>Limit</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <input type="submit" value="Search" class=" bg-blue-600 p-0.5 rounded-md font-bold text-white" />
                </fieldset>
            </form>
        </main>
        `;
    },

    submit: async function (e) {
        e.preventDefault();
        const mainEl = document.querySelector("main");
        const form = document.getElementById("searchForm");
        const searchValue = document.getElementById("searchInp").value.trim();
        const sortValue = document.querySelector(
            `[name="Radio"]:checked`,
        ).value;
        let limitValue = document.getElementById("limitSelect").value;

        if (!searchValue) {
            const fieldset = form.querySelector("fieldset");
            const messageEl = alerts.alertMessage(
                "Please search for something",
                "bg-red-500",
            );

            form.insertBefore(messageEl, fieldset);
            setTimeout(() => {
                messageEl.remove();
            }, 2000);
        } else {
            if (limitValue === "limit") limitValue = "5";
            const data = await API.callAPI();
            console.log(data);
            const galery = document.createElement("section");
            galery.innerHTML = data
                .map(({ id, url, title }) => {
                    return `
                    <div class="">
                        <h3>${id}</h3>
                        <img src="${url}" alt="${title}">
                        <p>${title}</p>
                    </div>
                `;
                })
                .join("");
            galery.className = "columns-3 gap-1";
            mainEl.insertBefore(galery, form.nextSibling);
        }
    },
};
