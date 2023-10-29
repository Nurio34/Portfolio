export default {
    alertMessage: function (message, className) {
        const el = document.createElement("div");

        el.innerHTML = `
            <div>
                <p class="${className}">${message}</p>
            </div>
        `;

        return el;
    },
};
