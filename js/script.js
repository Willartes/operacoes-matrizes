// js/script.js

(function () {
    "use strict";

    // --- Dados dos slides ---
    const slides = [
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/6651c77d-b1ad-403a-b621-659e90ca9acd/prod_agent_2028908685195108352/3b5e03d6-5a25-4c4f-b405-41b5c1819a21_1.png",
            alt: "Slide 1 - Operações com Matrizes",
            label: "Slide 1 - Operações com Matrizes"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/d3b3e106-9f31-432a-ae0e-b5f72e617c85/prod_agent_2028908685195108352/a3c33045-f7b7-49a8-96cf-8e36111c9f3c_1.png",
            alt: "Slide 2",
            label: "Slide 2"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/becef3f7-fb70-4279-857f-34bf7c2136ad/prod_agent_2028908685195108352/fe11e335-7d5a-4283-bab1-1f508502795f_1.png",
            alt: "Slide 3",
            label: "Slide 3"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/f3f738b1-6794-44b5-947f-81b7afa8c241/prod_agent_2028908685195108352/58ff45fb-0bbe-43e6-89c7-61c4aedfad9e_1.png",
            alt: "Slide 4",
            label: "Slide 4"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/e6a1800a-1bf5-4a84-a141-eaf09ded9d72/prod_agent_2028908685195108352/483a2355-04c3-4673-ac2c-8129f48eb888_1.png",
            alt: "Slide 5",
            label: "Slide 5"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/230ac8a6-58a1-490d-a1c4-e20b7eac3be0/prod_agent_2028908685195108352/9df6619e-94d2-4473-982f-37b88d546e25_1.png",
            alt: "Slide 6",
            label: "Slide 6"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/21314645-4724-4ecb-916b-0caa0caf0c85/prod_agent_2028908685195108352/d4e80bce-e350-490a-b405-19f9cf1d87f0_1.png",
            alt: "Slide 7",
            label: "Slide 7"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/d0afbaaf-16d2-4817-82ea-3ff98528271e/prod_agent_2028908685195108352/3e3bca6f-8b84-466f-9678-9d7f3c7bb4f8_1.png",
            alt: "Slide 8",
            label: "Slide 8"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/a9d0e454-39b8-44c7-a6c7-f601eaa2548f/prod_agent_2028908685195108352/30e0f603-a35a-48ee-b046-edcc46ab30e4_1.png",
            alt: "Slide 9",
            label: "Slide 9"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/d4adede0-3b73-4f96-a76f-31e8ce4aef5a/prod_agent_2028908685195108352/5fa36862-7c0c-48a3-861e-1f83e8c3ecb5_1.png",
            alt: "Slide 10",
            label: "Slide 10"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/2c07c24b-cf9a-442a-911d-e8d121b37f8d/prod_agent_2028908685195108352/cbe32f9c-cbf0-42a9-a6b3-2823b604c695_1.png",
            alt: "Slide 11",
            label: "Slide 11"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/48755451-4a52-492a-9f1b-4f1259cd0ace/prod_agent_2028908685195108352/08fa1413-8d30-440c-b9a0-b012b919fd9d_1.png",
            alt: "Slide 12",
            label: "Slide 12"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/63d2f739-50d4-4dd0-9429-59490cf82a70/prod_agent_2028908685195108352/c19977da-8890-4437-b89a-fcd7b3939341_1.png",
            alt: "Slide 13",
            label: "Slide 13"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/a9211f52-3f2f-4beb-b1d4-8bf72c24868f/prod_agent_2028908685195108352/211aefaa-55da-4b09-a881-ba0e9ce1685d_1.png",
            alt: "Slide 14",
            label: "Slide 14"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/9c6fbdda-2505-4e07-9c5a-41cac79fe450/prod_agent_2028908685195108352/f69f821a-fb1d-44c1-b372-15629c1086a7_1.png",
            alt: "Slide 15",
            label: "Slide 15"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/292d0ffa-cc02-448a-86e5-a647ab37b4a1/prod_agent_2028908685195108352/5b6717c7-575b-4ea8-a890-23c61c4bb08b_1.png",
            alt: "Slide 16",
            label: "Slide 16"
        },
        {
            src: "https://skyagent-artifacts.skywork.ai/image/2028908685195108352/b5d40981-0675-4a5f-ad0a-03dbecaca6c9/prod_agent_2028908685195108352/85d3e61a-d89e-4f68-978c-fdc8c526c5ef_1.png",
            alt: "Slide 17",
            label: "Slide 17"
        }
    ];

    // --- Elementos DOM ---
    const imgEl = document.getElementById("slide-image");
    const captionEl = document.getElementById("slide-caption");
    const currentSlideEl = document.getElementById("current-slide");
    const totalSlidesEl = document.getElementById("total-slides");

    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");

    const thumbnailsPanel = document.getElementById("thumbnails-panel");
    const headerButtons = document.querySelectorAll(".control-btn");

    // --- Estado ---
    let currentIndex = 0;
    let autoPlayTimer = null;
    const AUTO_PLAY_INTERVAL = 5000; // 5 segundos

    // --- Inicialização ---
    totalSlidesEl.textContent = String(slides.length);
    renderSlide(currentIndex);
    buildThumbnails();

    // --- Funções principais ---

    function renderSlide(index) {
        const slide = slides[index];
        imgEl.src = slide.src;
        imgEl.alt = slide.alt;
        currentSlideEl.textContent = String(index + 1);
        captionEl.textContent = `${index + 1} / ${slides.length} — ${slide.label}`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        renderSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        renderSlide(currentIndex);
    }

    function toggleFullscreen() {
        const el = document.documentElement;
        if (!document.fullscreenElement) {
            if (el.requestFullscreen) {
                el.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    function toggleThumbnails() {
        if (thumbnailsPanel.hasAttribute("hidden")) {
            thumbnailsPanel.removeAttribute("hidden");
        } else {
            thumbnailsPanel.setAttribute("hidden", "");
        }
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function handleHeaderButtonClick(action) {
        switch (action) {
            case "fullscreen":
                toggleFullscreen();
                break;
            case "thumbnails":
                toggleThumbnails();
                break;
            case "auto":
                if (autoPlayTimer) {
                    stopAutoPlay();
                } else {
                    startAutoPlay();
                }
                break;
        }
    }

    function buildThumbnails() {
        if (!thumbnailsPanel) return;
        const list = thumbnailsPanel.querySelector(".thumbnails__list");
        if (!list) return;

        list.innerHTML = "";
        slides.forEach((slide, index) => {
            const li = document.createElement("li");
            li.className = "thumbnails__item";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "thumbnail-btn";
            btn.dataset.slide = String(index);

            const img = document.createElement("img");
            img.src = slide.src;
            img.alt = `Miniatura slide ${index + 1}`;

            btn.appendChild(img);
            li.appendChild(btn);
            list.appendChild(li);
        });

        list.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;

            const button = target.closest(".thumbnail-btn");
            if (!button) return;

            const indexStr = button.dataset.slide;
            if (typeof indexStr === "string") {
                const index = parseInt(indexStr, 10);
                if (!Number.isNaN(index)) {
                    currentIndex = index;
                    renderSlide(currentIndex);
                }
            }
        });
    }

    // --- Eventos de clique ---

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    headerButtons.forEach((btn) => {
        const action = btn.dataset.action;
        if (!action) return;
        btn.addEventListener("click", () => handleHeaderButtonClick(action));
    });

    // --- Eventos de teclado ---
    window.addEventListener("keydown", (event) => {
        const key = event.key;

        switch (key) {
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            case "f":
            case "F":
                toggleFullscreen();
                break;
            case "t":
            case "T":
                toggleThumbnails();
                break;
            case "a":
            case "A":
                if (autoPlayTimer) {
                    stopAutoPlay();
                } else {
                    startAutoPlay();
                }
                break;
            case "Escape":
                stopAutoPlay();
                break;
        }
    });
})();