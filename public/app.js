<script>
        // --- БАЗА ДАННЫХ ПРЕДМЕТОВ (ДРОП) ---
        const globalSkins = [
            { id: 'w1', weapon: '★ Керамбит', skin: 'Градиент', price: 175000, rarity: 'gold', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Karambit+Fade' },
            { id: 'w2', weapon: '★ M9 Bayonet', skin: 'Кровавая паутина', price: 135000, rarity: 'gold', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=M9+Crimson' },
            { id: 'w3', weapon: '★ Перчатки', skin: 'Кровавое кимоно', price: 104000, rarity: 'gold', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Gloves+Kimono' },
            { id: 'w4', weapon: 'AWP', skin: 'История о драконе', price: 210000, rarity: 'covert', img: 'images/skins/dragon_lore.png' },
            { id: 'w5', weapon: 'M4A4', skin: 'Вой', price: 160000, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=M4A4+Howl' },
            { id: 'w6', weapon: 'Glock-18', skin: 'Градиент', price: 140000, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Glock+Fade' },
            { id: 'w7', weapon: 'AK-47', skin: 'Огненный змей', price: 85000, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=AK47+Fire+Serpent' },
            { id: 'w8', weapon: 'AK-47', skin: 'Топливный инжектор', price: 14500, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=AK47+Fuel' },
            { id: 'w9', weapon: 'AWP', skin: 'Неонуар', price: 4200, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=AWP+Neo-Noir' },
            { id: 'w10', weapon: 'M4A1-S', skin: 'Поток информации', price: 12800, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=M4A1-S+Printstream' },
            { id: 'w11', weapon: 'AK-47', skin: 'Изумрудные завитки', price: 1850, rarity: 'restricted', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=AK47+Emerald' },
            { id: 'w12', weapon: 'USP-S', skin: 'Путеводитель', price: 950, rarity: 'restricted', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=USP+Cortex' },
            { id: 'w13', weapon: 'Desert Eagle', skin: 'Код красного', price: 3800, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Deagle+Code' },
            { id: 'w14', weapon: 'M4A4', skin: 'Безлюдный космос', price: 1400, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=M4A4+Desolate' },
            { id: 'w15', weapon: 'Glock-18', skin: 'Дух воды', price: 650, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Glock+Water' },
            { id: 'w16', weapon: 'MAC-10', skin: 'Неоновый гонщик', price: 900, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=MAC10+Neon' },
            { id: 'w17', weapon: 'FAMAS', skin: 'Бед-трип', price: 450, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=FAMAS+Comm' },
            { id: 'w18', weapon: 'Galil AR', skin: 'Хроматический аберрация', price: 550, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Galil+Chrom' },
            { id: 'w19', weapon: 'P250', skin: 'Азимов', price: 380, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=P250+Asimov' },
            { id: 'w20', weapon: 'MP9', skin: 'Слизь', price: 180, rarity: 'uncommon', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=MP9+Bio' },
            { id: 'w21', weapon: 'Nova', skin: 'Скоростной зверь', price: 290, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Nova+Hyper' },
            { id: 'w22', weapon: 'Augh', skin: 'Хамелеон', price: 410, rarity: 'covert', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=AUG+Cham' },
            { id: 'w23', weapon: 'SSG 08', skin: 'Мертвые головы', price: 480, rarity: 'classified', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=SSG+Death' },
            { id: 'w24', weapon: 'SG 553', skin: 'Колония', price: 45, rarity: 'common', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=SG+Colony' },
            { id: 'w25', weapon: 'Five-SeveN', skin: 'Испытание огнем', price: 65, rarity: 'common', img: 'https://via.placeholder.com/120x90/1a1d24/fff?text=Five7+Flame' },
            { id: 'w26', weapon: 'Dual Berettas', skin: 'Ангельские глаза', price: 240, rarity: 'restricted', img: 'images/skins/Angel_Eyes.png' }
        ];

        // --- БАЗА ДАННЫХ КЕЙСОВ ---
        const casesData = [
            { id: 'case_rub_0',  name: 'Кейс «Бомж»',              price: 15,   currency: 'rub', icon: '<img src="images/case/c120.png" alt="case">', items: ['w24', 'w25', 'w20'], weights: [5, 3, 1] },
            { id: 'case_rub_1',  name: 'Кейс «Рокфеллер»',          price: 450,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_gloves_web.0d2b87025ab6a8c069c44bc8d5b91b55b8ab68e5.png" alt="case">', items: ['w11', 'w12', 'w13', 'w14', 'w15', 'w17'], weights: [5, 3, 1] },
            { id: 'case_rub_2',  name: 'Кейс «Олигарх»',            price: 1200, currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_cs20.1e6c0be53e3c90609e5f55e0e24a5a06e7d84716.png" alt="case">', items: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'], weights: [5, 3, 1] },
            { id: 'case_rub_3',  name: 'Кейс «Бродяга»',            price: 250,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_phoenix_web.a50c330ea53fc36e9d7c7de5dc90e6df3cf98427.png" alt="case">', items: ['w14', 'w15', 'w18', 'w19', 'w20', 'w21'], weights: [5, 3, 1] },
            { id: 'case_rub_4',  name: 'Кейс «Техно-Драйв»',        price: 150,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_29.48f9e5ad4bdd2e0ba3e5f63b3b0f75b33e9e7e3d.png" alt="case">', items: ['w15', 'w19', 'w20', 'w23', 'w24', 'w25', 'w26'], weights: [5, 3, 1] },
            { id: 'case_rub_5',  name: 'Кейс «Арктика»',            price: 600,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_xmas_2013_web.4c31bc67e5d3d81a50b6f7d92c4c59b0f2f44b3c.png" alt="case">', items: ['w8', 'w9', 'w10', 'w12', 'w13', 'w16'], weights: [5, 3, 1] },
            { id: 'case_rub_6',  name: 'Кейс «Милитари»',           price: 350,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_bravo_web.52c3bcf76a7b82741b4dba9be50c7b05f16ad8c4.png" alt="case">', items: ['w11', 'w14', 'w17', 'w18', 'w22', 'w23'], weights: [5, 3, 1] },
            { id: 'case_rub_7',  name: 'Кейс «Анубис»',             price: 800,  currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_13_web.ddec8f55aa1ef48e1dc98339d5e0d8eedff0e7f3.png" alt="case">', items: ['w6', 'w8', 'w10', 'w13', 'w14', 'w15'], weights: [5, 3, 1] },
            { id: 'case_rub_8',  name: 'Кейс «Нож»',                price: 5000, currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_36.b16dcf72fe3f5b4be16f765b4b4db2ceeedc7455.png" alt="case">', items: ['w1', 'w2'], weights: [5, 3, 1] },
            { id: 'case_rub_9',  name: 'Кейс «Перчатки»',           price: 4500, currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_gloves_web.0d2b87025ab6a8c069c44bc8d5b91b55b8ab68e5.png" alt="case">', items: ['w3'], weights: [5, 3, 1] },
            { id: 'case_rub_10', name: 'Кейс «Снайпер»',            price: 1100, currency: 'rub', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_11_web.3cb2a8f2cc8d73d0c62b1ac8ecdff5fb68cbde58.png" alt="case">', items: ['w4', 'w9', 'w23'], weights: [5, 3, 1] },
            { id: 'case_rub_11', name: 'Кейс «Облизни червячка»',   price: 1488, currency: 'rub', icon: '😜 🪱', items: ['w26', 'w4'], weights: [1000, 1] },

            { id: 'case_coin_1',  name: 'Кейс «Ветеран»',           price: 1500,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_esports_web.07aebe44e1b3fcc83fa9c3ea1e1da2c7b5c66e97.png" alt="case">', items: ['w8', 'w11', 'w12', 'w16', 'w19'], weights: [5, 3, 1] },
            { id: 'case_coin_2',  name: 'Кейс «Тайное»',            price: 5000,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_13_web.ddec8f55aa1ef48e1dc98339d5e0d8eedff0e7f3.png" alt="case">', items: ['w4', 'w5', 'w6', 'w7', 'w10'], weights: [5, 3, 1] },
            { id: 'case_coin_3',  name: 'Кейс «Премиум»',           price: 8500,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_cs20.1e6c0be53e3c90609e5f55e0e24a5a06e7d84716.png" alt="case">', items: ['w1', 'w2', 'w3', 'w4', 'w8'], weights: [5, 3, 1] },
            { id: 'case_coin_4',  name: 'Кейс «Новичок»',           price: 300,   currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_csgo_web.ddbe9c29b48b7f67aad04d22acaf5fabb1e5f8d3.png" alt="case">', items: ['w18', 'w19', 'w20', 'w21', 'w24', 'w25'], weights: [5, 3, 1] },
            { id: 'case_coin_5',  name: 'Кейс «Засекреченное»',     price: 2500,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_37.b11bef64c4adf3e1a0a86cd851b8ae13b77dd16c.png" alt="case">', items: ['w8', 'w13', 'w14', 'w17', 'w18', 'w21'], weights: [5, 3, 1] },
            { id: 'case_coin_6',  name: 'Кейс «Фортуна»',           price: 1200,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_11_web.3cb2a8f2cc8d73d0c62b1ac8ecdff5fb68cbde58.png" alt="case">', items: ['w12', 'w15', 'w16', 'w19', 'w22', 'w23'], weights: [5, 3, 1] },
            { id: 'case_coin_7',  name: 'Кейс «Феникс»',            price: 1800,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_phoenix_web.a50c330ea53fc36e9d7c7de5dc90e6df3cf98427.png" alt="case">', items: ['w9', 'w11', 'w14', 'w15', 'w17', 'w21'], weights: [5, 3, 1] },
            { id: 'case_coin_8',  name: 'Кейс «Хайроллер»',         price: 12000, currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_36.b16dcf72fe3f5b4be16f765b4b4db2ceeedc7455.png" alt="case">', items: ['w1', 'w2', 'w3', 'w5'], weights: [5, 3, 1] },
            { id: 'case_coin_9',  name: 'Кейс «Сталкер»',           price: 900,   currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_29.48f9e5ad4bdd2e0ba3e5f63b3b0f75b33e9e7e3d.png" alt="case">', items: ['w14', 'w17', 'w20', 'w22', 'w23', 'w25'], weights: [5, 3, 1] },
            { id: 'case_coin_10', name: 'Кейс «Магнат»',            price: 6500,  currency: 'coin', icon: '<img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_37.b11bef64c4adf3e1a0a86cd851b8ae13b77dd16c.png" alt="case">', items: ['w4', 'w6', 'w7', 'w8', 'w10'], weights: [5, 3, 1] }
            
        ];

        // --- ГЛОБАЛЬНОЕ СОСТОЯНИЕ ДВИЖКА ---
        let balance = 2500;
        let bonusBalance = 500;
        let _rawInventory = [];
        // Прокси — автоматически обновляет счётчик при каждом изменении
        let userInventory = new Proxy(_rawInventory, {
            set(target, prop, value) {
                target[prop] = value;
                // Обновляем счётчик вкладки мгновенно
                const counter = document.getElementById('invCountHeader');
                if (counter) counter.innerText = target.filter(x => x && typeof x === 'object').length;
                return true;
            }
        });
        let currentCaseId = null;
        let isSpinning = false;
        let multiCount = 1;
        
        let isVerified = true;
        let selectedPaymentMethodId = 'sbp'; // Метод по умолчанию

        let stats = { totalCases: 0, totalUpgrades: 0, totalWithdrawn: 0, maxDrop: 0 };
        let selectedUpgradeSourceIdx = [];  // массив индексов выбранных скинов
        let selectedUpgradeTargetId = null;
        let selectedContractIndices = [];
        let withdrawLogsCounter = 0;


        // --- ФУНКЦИИ МОДАЛЬНОГО ОКНА ПОПОЛНЕНИЯ ---
        function openDepositModal() {
            document.getElementById('depositModal').style.display = 'flex';
        }

        function closeDepositModal() {
            document.getElementById('depositModal').style.display = 'none';
        }

        function selectPaymentMethod(element, methodId) {
            // Снимаем класс active со всех методов
            document.querySelectorAll('.payment-method-card').forEach(card => card.classList.remove('active'));
            // Добавляем текущему
            element.classList.add('active');
            selectedPaymentMethodId = methodId;
        }

        function executeModalDeposit() {
            const amountInput = document.getElementById('depositAmountInput');
            let amount = parseInt(amountInput.value);

            if (isNaN(amount) || amount <= 0) {
                alert('Пожалуйста, введите корректную сумму пополнения!');
                return;
            }

            balance += amount;
            isVerified = true; // Снимаем ограничения
            updateBalancesUI();
            closeDepositModal();

            // Красивое отображение выбранного метода для уведомления
            const methodNames = {
                'sbp': 'СБП',
                'card': 'Банковской карты',
                'crypto': 'Криптовалюты',
                'skins': 'Скинов Steam',
                'yoomoney': 'ЮMoney',
                'qiwi': 'QIWI'
            };
            const activeMethodName = methodNames[selectedPaymentMethodId] || 'Выбранной системы';

            alert(`Платеж успешно проведен! Баланс пополнен на ${amount} ₽ через ${activeMethodName}. Верификация успешно завершена.`);
            
            // Отправляем системную плашку в открытый чат поддержки
            const msgDiv = document.getElementById('supportMessages');
            const systemMsg = document.createElement('div');
            systemMsg.className = 'msg bot';
            systemMsg.style.borderLeftColor = '#28a745';
            systemMsg.style.color = '#28a745';
            systemMsg.innerHTML = `<strong>[Система]:</strong> Аккаунт успешно верифицирован (пополнение на ${amount} ₽ через ${activeMethodName}). Ограничения на вывод и гейминг полностью сняты!`;
            msgDiv.appendChild(systemMsg);
            msgDiv.scrollTop = msgDiv.scrollHeight;
        }


        // --- ДИНАМИЧЕСКИЙ СЧЕТЧИК ОНЛАЙНА ---
        function initOnlineCounter() {
            const el = document.getElementById('liveOnlineVal');
            let currentOnline = 278;
            
            setInterval(() => {
                const shift = Math.floor(Math.random() * 7) - 3;
                currentOnline += shift;
                if(currentOnline < 240) currentOnline = 278;
                if(currentOnline > 304) currentOnline = 278;
                el.innerText = currentOnline.toLocaleString('ru-RU');
            }, 2500);
        }

        // --- ИНИЦИАЛИЗАЦИЯ И МЕНЮ ---
        function renderCasesMenu() {
            const rubleGrid = document.getElementById('rubleCasesGrid');
            const coinGrid = document.getElementById('coinCasesGrid');
            const selector = document.getElementById('battleCaseSelect');
            
            rubleGrid.innerHTML = '';
            coinGrid.innerHTML = '';
            selector.innerHTML = '';

            const searchVal = (document.getElementById('casesSearchInput')?.value || '').toLowerCase().trim();
            const sortVal = document.getElementById('casesSortSelect')?.value || 'default';

            let filtered = casesData.filter(c => {
                if (!searchVal) return true;
                return c.name.toLowerCase().includes(searchVal);
            });

            filtered = [...filtered].sort((a, b) => {
                if (sortVal === 'price_asc') return a.price - b.price;
                if (sortVal === 'price_desc') return b.price - a.price;
                if (sortVal === 'name_asc') return a.name.localeCompare(b.name, 'ru');
                if (sortVal === 'name_desc') return b.name.localeCompare(a.name, 'ru');
                return 0;
            });

            filtered.forEach(c => {
                const card = document.createElement('div');
                const isCoin = c.currency === 'coin';
                card.className = `case-card ${isCoin ? 'bonus-case-style' : ''}`;
                card.onclick = () => loadCaseDetail(c.id);

                card.innerHTML = `
                    <div class="case-card-header-info">
                        <h3>${c.name}</h3>
                        <p>${c.price} ${isCoin ? '🪙' : '₽'}</p>
                    </div>
                    <div class="case-icon">${c.icon}</div>
                `;

                if (isCoin) {
                    coinGrid.appendChild(card);
                } else {
                    rubleGrid.appendChild(card);
                }
            });

            // populate battle selector from all cases (unsorted)
            casesData.forEach(c => {
                const isCoin = c.currency === 'coin';
                const opt = document.createElement('option');
                opt.value = c.id;
                opt.innerText = `${c.name} (${c.price} ${isCoin ? '🪙' : '₽'})`;
                selector.appendChild(opt);
            });
        }

        function loadCaseDetail(caseId) {
            if (isSpinning) return;
            currentCaseId = caseId;
            const c = casesData.find(x => x.id === caseId);
            
            document.getElementById('casesListView').style.display = 'none';
            document.getElementById('caseDetailView').style.display = 'block';
            document.getElementById('openedCaseTitle').innerText = c.name;
            document.getElementById('openedCaseTitle').style.color = c.currency === 'coin' ? '#00e5ff' : '#ffb700';

            const contentGrid = document.getElementById('caseContentsGrid');
            contentGrid.innerHTML = '';
            c.items.forEach(itemId => {
                const item = globalSkins.find(s => s.id === itemId);
                const itemCard = document.createElement('div');
                itemCard.className = `content-item-card`;
                itemCard.style.borderBottomColor = getRarityColor(item.rarity);

                itemCard.innerHTML = `
                    <div class="card-name-box">
                        <div class="card-weapon">${item.weapon}</div>
                        <div class="card-skin">${item.skin}</div>
                        <div class="card-price">${item.price} ₽</div>
                    </div>
                    <img src="${item.img}" alt="скин">
                `;
                contentGrid.appendChild(itemCard);
            });

            buildRouletteStack(c);
            // Обновляем текст кнопки под текущий multiCount + цену
            const openBtn = document.getElementById('openCaseBtn');
            const currSign = c.currency === 'coin' ? '🪙' : '₽';
            if (openBtn) {
                const totalCost = c.price * multiCount;
                openBtn.textContent = multiCount === 1
                    ? `Открыть кейс — ${c.price} ${currSign}`
                    : `Открыть ${multiCount} кейса — ${totalCost} ${currSign}`;
            }
        }

        function returnToCasesList() {
            if (isSpinning) return;
            document.getElementById('caseDetailView').style.display = 'none';
            document.getElementById('casesListView').style.display = 'block';
            currentCaseId = null;
        }

        // --- ВЫБОР КОЛИЧЕСТВА КЕЙСОВ ---
        function setMultiCount(n, btn) {
            if (isSpinning) return;
            multiCount = n;
            document.querySelectorAll('.multi-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // обновить надпись кнопки открытия
            const openBtn = document.getElementById('openCaseBtn');
            if (openBtn && currentCaseId) {
                const _c = casesData.find(x => x.id === currentCaseId);
                const _sign = _c && _c.currency === 'coin' ? '🪙' : '₽';
                const _total = _c ? _c.price * n : 0;
                openBtn.textContent = n === 1
                    ? `Открыть кейс — ${_c ? _c.price : ''} ${_sign}`
                    : `Открыть ${n} кейса — ${_total} ${_sign}`;
            } else if (openBtn) {
                openBtn.textContent = n === 1 ? 'Открыть кейс' : `Открыть ${n} кейса`;
            }
            // перестроить рулетки под новое количество
            if (currentCaseId) {
                const c = casesData.find(x => x.id === currentCaseId);
                buildRouletteStack(c);
            }
        }
// --- ЛОГИКА РАБОТЫ РУЛЕТКИ ---

// Строит DOM-стек рулеток нужного числа и заполняет каждую карточками
function buildRouletteStack(c) {
    const stack = document.getElementById('roulettesStack');
    stack.innerHTML = '';
    for (let i = 0; i < multiCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'roulette-wrapper';
        wrapper.innerHTML = `
            <div class="pointer"></div>
            <div class="roulette-window">
                <div class="roulette-track" id="rouletteTrack_${i}"></div>
            </div>
        `;
        stack.appendChild(wrapper);
        _fillTrack(i, c);
    }
}

function getRandomItemWithWeights(items, weights) {
    // Если веса не заданы или их длина не совпадает – выбираем равномерно
    if (!weights || weights.length !== items.length) {
        return items[Math.floor(Math.random() * items.length)];
    }
    // Вычисляем сумму весов
    let totalWeight = 0;
    for (let w of weights) totalWeight += w;
    if (totalWeight <= 0) return items[0]; // защита от дурака
    // Случайное число от 0 до totalWeight
    let random = Math.random() * totalWeight;
    let accum = 0;
    for (let i = 0; i < items.length; i++) {
        accum += weights[i];
        if (random < accum) return items[i];
    }
    return items[0];
}

// Заполняет одну рулетку карточками и ГАРАНТИРОВАННО сбрасывает позицию
function _fillTrack(idx, c) {
    const track = document.getElementById(`rouletteTrack_${idx}`);
    if (!track) return;

    // 1. Убираем transition, чтобы сброс был мгновенным
    track.style.transition = 'none';
    track.style.transform = 'translateX(0px)';

    // 2. Принудительный reflow — браузер ОБЯЗАН применить стили выше
    //    до того как мы изменим что-либо ещё. Без этой строки при
    //    повторном спине transition назначается раньше чем сброс
    //    фиксируется, и анимация «прыгает» мгновенно.
    void track.offsetWidth;

    track.innerHTML = '';
    for (let i = 0; i < 58; i++) {
        const randId = c.items[Math.floor(Math.random() * c.items.length)];
        const item = globalSkins.find(s => s.id === randId);
        const el = document.createElement('div');
        el.className = `item-card rarity-${item.rarity}`;
        el.innerHTML = `
            <div class="item-name">${item.weapon} | ${item.skin}</div>
            <div class="item-price">${item.price} ₽</div>
            <img src="${item.img}" alt="скин">
        `;
        track.appendChild(el);
    }
}

// Хранилище для таймеров, чтобы отменять их при необходимости
let spinTimers = [];
let quickSpinMode = false;

function spinRoulette() {
    if (isSpinning || !currentCaseId) return;
    quickSpinMode = false;
    _doSpin();
}

function quickSpinRoulette() {
    if (isSpinning || !currentCaseId) return;
    quickSpinMode = true;
    _doSpin();
}

function _doSpin() {
    const c = casesData.find(x => x.id === currentCaseId);

    // Списываем стоимость × количество кейсов (один раз!)
    const totalCost = c.price * multiCount;
    if (c.currency === 'rub') {
        if (balance < totalCost) {
            showBalanceToast('rub', totalCost, balance);
            return;
        }
        balance -= totalCost;
    } else {
        if (bonusBalance < totalCost) {
            showBalanceToast('coin', totalCost, bonusBalance);
            return;
        }
        bonusBalance -= totalCost;
    }

    isSpinning = true;
    document.getElementById('openCaseBtn').disabled = true;
    const qsBtn = document.getElementById('quickSpinBtn'); if(qsBtn) qsBtn.disabled = true;
    updateBalancesUI();

    spinTimers.forEach(timer => clearTimeout(timer));
    spinTimers = [];

    const winningItems = [];
    // Предрассчитываем победителей и подставляем в трек ДО запуска таймеров
    // Для каждой рулетки — своя случайная позиция победителя (37..52)
    const winPositions = [];
    for (let i = 0; i < multiCount; i++) {
        winPositions.push(38 + Math.floor(Math.random() * 14)); // 38..51
    }
    for (let i = 0; i < multiCount; i++) {
        const track = document.getElementById(`rouletteTrack_${i}`);
        if (!track) continue;

        const winItemId = getRandomItemWithWeights(c.items, c.weights);
        const winningItem = globalSkins.find(s => s.id === winItemId);
        winningItems.push(winningItem);

        // Вставляем победителя на рандомную позицию
        const targetCard = track.children[winPositions[i]];
        if (targetCard) {
            targetCard.className = `item-card rarity-${winningItem.rarity}`;
            targetCard.innerHTML = `
                <div class="item-name">${winningItem.weapon} | ${winningItem.skin}</div>
                <div class="item-price">${winningItem.price} ₽</div>
                <img src="${winningItem.img}" alt="скин">
            `;
        }
    }

    // spinDuration — длинный для плавного CS:GO-like замедления
    const spinDuration = quickSpinMode ? 1.8 : 9.5;
    // Кривая: мгновенный старт → очень плавное торможение в конце
    const easingFn = quickSpinMode
        ? 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        : 'cubic-bezier(0.1, 0.57, 0.1, 1)';

    for (let i = 0; i < multiCount; i++) {
        const delay = quickSpinMode ? 0 : i * 80;
        const trackIdx = i; // замкнуть в closure
        const animationTimer = setTimeout(() => {
            const track = document.getElementById(`rouletteTrack_${trackIdx}`);
            if (!track) return;

            // Сброс позиции (transition уже убран в _fillTrack)
            track.style.transition = 'none';
            track.style.transform = 'translateX(0px)';
            void track.offsetWidth; // принудительный reflow

            // Измеряем ширины ЗДЕСЬ — после reflow, перед запуском анимации
            // Это единственный правильный момент: DOM отрисован, layout актуален
            const firstCard = track.children[0];
            const realCardWidth = firstCard
                ? firstCard.getBoundingClientRect().width
                : 130;
            const windowEl = track.parentElement; // .roulette-window
            const realWindowWidth = windowEl
                ? windowEl.getBoundingClientRect().width
                : 560;

            // Центр карточки по позиции победителя → центр окна (= линия указателя)
            const winPos = winPositions[trackIdx];
            const targetOffset = (winPos * realCardWidth)
                                - (realWindowWidth / 2)
                                + (realCardWidth / 2);

            // Джиттер строго внутри карточки: ±(realCardWidth/2 - 5)px
            const maxJitter = Math.floor(realCardWidth / 2) - 5;
            const jitter = Math.floor(Math.random() * maxJitter * 2) - maxJitter;
            const finalShift = Math.round(targetOffset + jitter);

            // Запускаем CSS transition
            void track.offsetWidth;
            track.style.transition = `transform ${spinDuration + trackIdx * 0.06}s ${easingFn}`;
            track.style.transform = `translateX(-${finalShift}px)`;
        }, delay);
        spinTimers.push(animationTimer);
    }

    // Общая длительность: время анимации последней рулетки + задержка старта + буфер
    const totalDuration = (spinDuration + (multiCount - 1) * 0.06) * 1000
                        + (quickSpinMode ? 0 : 80 * (multiCount - 1))
                        + 900;

    const resultTimer = setTimeout(() => {
        // Подсвечиваем выигрышные карточки под указателем
        for (let i = 0; i < multiCount; i++) {
            const track = document.getElementById(`rouletteTrack_${i}`);
            if (track) {
                const targetCard = track.children[winPositions[i]];
                if (targetCard) {
                    targetCard.style.boxShadow = '0 0 18px 4px #ffb700, inset 0 0 10px rgba(255,183,0,0.3)';
                    targetCard.style.zIndex = '5';
                }
            }
        }

        winningItems.forEach(winningItem => {
            userInventory.push({ ...winningItem, uid: Date.now() + Math.random() });
            stats.totalCases++;
            if (winningItem.price > stats.maxDrop) stats.maxDrop = winningItem.price;
            addDropToFeed(winningItem, true);
            // Записываем в историю профиля
            const caseName = casesData.find(x => x.id === currentCaseId)?.name || 'Кейс';
            recordCaseOpen(caseName, winningItem);
        });

        renderInventory();
        updateStatsUI();
        updateBalancesUI();

        const unlockTimer = setTimeout(() => {
            isSpinning = false;
            document.getElementById('openCaseBtn').disabled = false;
            const qsBtnU = document.getElementById('quickSpinBtn'); if(qsBtnU) qsBtnU.disabled = false;

            if (currentCaseId === c.id) {
                buildRouletteStack(c);
            }
            spinTimers = [];
        }, 1800);

        spinTimers.push(unlockTimer);
    }, totalDuration);

    spinTimers.push(resultTimer);
}

        // --- ЖИВАЯ ЛЕНТА ДРОПА ---
        function addDropToFeed(item, isPlayer = false) {
            const feed = document.getElementById('liveFeedList');
            const el = document.createElement('div');
            el.className = `feed-item feed-rarity-${item.rarity} ${isPlayer ? 'player-drop' : ''}`;
            
            el.innerHTML = `
                <div class="feed-item-info">${isPlayer ? '⭐ ВЫБИТО ВАМИ' : 'Игрок ' + Math.floor(Math.random()*899+100)}</div>
                <div class="feed-item-skin">${item.weapon} | ${item.skin}</div>
                <img src="${item.img}" alt="скин">
            `;

            // Вставляем в начало без reflow — просто prepend
            feed.insertBefore(el, feed.firstChild);
            // Удаляем лишние элементы снизу (строго 8)
            while (feed.children.length > 8) {
                feed.removeChild(feed.lastChild);
            }
        }

        function initLiveFeedSimulation() {
            setInterval(() => {
                if (Math.random() > 0.35) {
                    const randItem = globalSkins[Math.floor(Math.random() * globalSkins.length)];
                    addDropToFeed(randItem, false);
                }
            }, 2800);
        }

        // --- УПРАВЛЕНИЕ СТРАНИЦАМИ ---
        function switchPage(pageId) {
            if (isSpinning) return;
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            
            document.getElementById(`page-${pageId}`).classList.add('active');
            document.getElementById(`tab-${pageId}`).classList.add('active');

            if (pageId === 'upgrade') initUpgradePage();
            if (pageId === 'contracts') initContractsPage();
            if (pageId === 'withdraw') initWithdrawPage();
            if (pageId === 'inventory') renderInventory();
        }

        // --- МОДУЛЬ АПГРЕЙДА ---
        function initUpgradePage() {
            selectedUpgradeSourceIdx = [];   // теперь массив индексов
            selectedUpgradeTargetId = null;
            chanceBoostRubles = 0;
            const sl = document.getElementById('boostSlider');
            if (sl) sl.value = 0;
            const formulaEl = document.getElementById('boostFormulaText');
            if (formulaEl) formulaEl.innerHTML = 'Выберите скины выше, чтобы увидеть расчёт';
            const bnd = document.getElementById('boostNewChance');
            if (bnd) bnd.innerText = '—';
            const bad = document.getElementById('boostAddedDisplay');
            if (bad) bad.innerText = '+0 ₽';
            document.getElementById('upgradeChanceVal').innerText = '0%';
            document.getElementById('executeUpgradeBtn').disabled = true;
            document.getElementById('upgradeStatusText').innerText = '';
            const qub = document.getElementById('quickUpgradeBtn');
            if (qub) qub.disabled = true;

            document.getElementById('vs-source-box').innerHTML = '<div class="vs-title">Ваши предметы</div><div class="vs-price">0 ₽</div><div style="font-size:9px;color:#8a92a3;margin-top:2px;">выберите 1 или несколько</div>';
            document.getElementById('vs-target-box').innerHTML = '<div class="vs-title">Цель</div><div class="vs-price">-</div>';

            drawUpgradeWheel(0, false);

            const invList = document.getElementById('upgradeInventory');
            invList.innerHTML = '';
            userInventory.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = 'mini-skin-card';
                el.style.borderBottomColor = getRarityColor(item.rarity);
                el.dataset.index = index;
                el.innerHTML = `
                    <div class="mini-skin-info-top">${item.weapon} | ${item.skin}</div>
                    <div class="mini-skin-price-top">${item.price} ₽</div>
                    <img src="${item.img}">
                `;
                el.onclick = () => toggleUpgradeSource(index, el);
                invList.appendChild(el);
            });

            const globalList = document.getElementById('upgradeGlobalSkins');
            globalList.innerHTML = '';
            const sortedSkins = [...globalSkins].sort((a,b) => a.price - b.price);
            sortedSkins.forEach(item => {
                const el = document.createElement('div');
                el.className = 'mini-skin-card';
                el.style.borderBottomColor = getRarityColor(item.rarity);
                el.innerHTML = `
                    <div class="mini-skin-info-top">${item.weapon} | ${item.skin}</div>
                    <div class="mini-skin-price-top">${item.price} ₽</div>
                    <img src="${item.img}">
                `;
                el.onclick = () => selectUpgradeTarget(item.id, el);
                globalList.appendChild(el);
            });
        }

        function toggleUpgradeSource(index, element) {
            const pos = selectedUpgradeSourceIdx.indexOf(index);
            if (pos === -1) {
                selectedUpgradeSourceIdx.push(index);
                element.classList.add('selected');
            } else {
                selectedUpgradeSourceIdx.splice(pos, 1);
                element.classList.remove('selected');
            }

            // Обновляем vs-source-box
            const srcBox = document.getElementById('vs-source-box');
            if (selectedUpgradeSourceIdx.length === 0) {
                srcBox.innerHTML = '<div class="vs-title">Ваши предметы</div><div class="vs-price">0 ₽</div><div style="font-size:9px;color:#8a92a3;margin-top:2px;">выберите 1 или несколько</div>';
            } else {
                const totalSrcPrice = selectedUpgradeSourceIdx.reduce((sum, i) => sum + userInventory[i].price, 0);
                const count = selectedUpgradeSourceIdx.length;
                const names = selectedUpgradeSourceIdx.map(i => userInventory[i].weapon).join(', ');
                srcBox.innerHTML = `
                    <div class="vs-title" style="font-size:9px;">${names}</div>
                    <div class="vs-price">${totalSrcPrice.toLocaleString('ru-RU')} ₽</div>
                    <div style="font-size:9px;color:#8a92a3;">${count} предм.</div>
                `;
                // Обновляем макс ползунка под текущий баланс
                const sl = document.getElementById('boostSlider');
                if (sl) { sl.max = Math.max(10000, balance); sl.step = Math.max(50, Math.round(balance / 200)); }
            }
            calculateUpgradeChance();
        }

        function selectUpgradeTarget(id, element) {
            document.querySelectorAll('#upgradeGlobalSkins .mini-skin-card').forEach(c => c.classList.remove('selected'));
            element.classList.add('selected');
            selectedUpgradeTargetId = id;

            const item = globalSkins.find(x => x.id === id);
            document.getElementById('vs-target-box').innerHTML = `
                <div class="vs-title">${item.weapon}</div>
                <div class="vs-price">${item.price.toLocaleString('ru-RU')} ₽</div>
                <img src="${item.img}">
            `;
            // Адаптируем макс ползунка под стоимость цели
            const sl = document.getElementById('boostSlider');
            if (sl) {
                sl.max = Math.round(item.price * 0.95);
                sl.step = Math.max(50, Math.round(item.price / 200));
                document.getElementById('boostSliderMax').innerText = Math.round(item.price * 0.95).toLocaleString('ru-RU') + ' ₽';
            }
            calculateUpgradeChance();
        }

        function drawUpgradeWheel(chancePercent, spinning) {
            const canvas = document.getElementById('upgradeWheelCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.width, H = canvas.height;
            const cx = W / 2, cy = H / 2;
            const outerR = 100, innerR = 68, tickR = 106;

            ctx.clearRect(0, 0, W, H);

            // --- Фон (тёмное кольцо) ---
            ctx.beginPath();
            ctx.arc(cx, cy, outerR + 8, 0, Math.PI * 2);
            ctx.fillStyle = '#13161c';
            ctx.fill();

            // --- Засечки по краю (как тахометр) ---
            for (let i = 0; i < 60; i++) {
                const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
                const isMain = i % 5 === 0;
                const r1 = tickR, r2 = tickR - (isMain ? 9 : 5);
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
                ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
                ctx.strokeStyle = isMain ? '#3a3f50' : '#252835';
                ctx.lineWidth = isMain ? 2 : 1;
                ctx.stroke();
            }

            // --- Серая дуга (проигрыш, от chance до 100%) ---
            const startAngle = -Math.PI / 2; // 12 часов
            const fullAngle = Math.PI * 2;
            const winAngle = (chancePercent / 100) * fullAngle;

            // Серый сектор (проигрыш)
            if (chancePercent < 100) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, outerR, startAngle + winAngle, startAngle + fullAngle);
                ctx.closePath();
                ctx.fillStyle = '#2a2e3e';
                ctx.fill();
            }

            // --- Градиентный сектор победы (зелёный→жёлтый→оранжевый→красный) ---
            if (chancePercent > 0) {
                // Рисуем дугу с градиентом цвета
                const steps = Math.max(2, Math.round(chancePercent * 1.2));
                for (let s = 0; s < steps; s++) {
                    const a0 = startAngle + (s / steps) * winAngle;
                    const a1 = startAngle + ((s + 1) / steps) * winAngle;
                    const t = s / steps; // 0 = начало (лево), 1 = конец дуги

                    // Цвет: зелёный→жёлтый→оранжевый (как на скрине)
                    let r, g, b;
                    if (t < 0.4) {
                        // зелёный → жёлтый
                        const p = t / 0.4;
                        r = Math.round(40 + p * 215);
                        g = Math.round(167 + p * 20);
                        b = Math.round(40 - p * 40);
                    } else if (t < 0.75) {
                        // жёлтый → оранжевый
                        const p = (t - 0.4) / 0.35;
                        r = Math.round(255);
                        g = Math.round(187 - p * 100);
                        b = 0;
                    } else {
                        // оранжевый → красный
                        const p = (t - 0.75) / 0.25;
                        r = 255;
                        g = Math.round(87 - p * 87);
                        b = 0;
                    }

                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.arc(cx, cy, outerR, a0, a1);
                    ctx.closePath();
                    ctx.fillStyle = `rgb(${r},${g},${b})`;
                    ctx.fill();
                }
            }

            // --- Внутренний круг (вырез, как пончик) ---
            ctx.beginPath();
            ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1d27';
            ctx.fill();

            // --- Внешняя обводка кольца ---
            ctx.beginPath();
            ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
            ctx.strokeStyle = '#0d0f15';
            ctx.lineWidth = 2;
            ctx.stroke();

            // --- Внутренняя обводка ---
            ctx.beginPath();
            ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
            ctx.strokeStyle = '#2a2e3e';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // --- Glow по краю победного сектора ---
            if (chancePercent > 0 && chancePercent < 100) {
                const edgeAngle = startAngle + winAngle;
                const grad = ctx.createLinearGradient(
                    cx + Math.cos(edgeAngle - 0.1) * innerR,
                    cy + Math.sin(edgeAngle - 0.1) * innerR,
                    cx + Math.cos(edgeAngle) * outerR,
                    cy + Math.sin(edgeAngle) * outerR
                );
                grad.addColorStop(0, 'rgba(255,255,255,0)');
                grad.addColorStop(1, 'rgba(255,255,255,0.15)');
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, outerR, edgeAngle - 0.04, edgeAngle + 0.04);
                ctx.closePath();
                ctx.fillStyle = grad;
                ctx.fill();
            }

            // --- Обновляем метку шанса ---
            const label = document.getElementById('wheelLabel');
            if (label) {
                if (chancePercent === 0) {
                    label.textContent = 'выберите предмет';
                    label.style.color = '#8a92a3';
                } else if (chancePercent >= 75) {
                    label.textContent = 'высокий шанс';
                    label.style.color = '#28a745';
                } else if (chancePercent >= 40) {
                    label.textContent = 'средний шанс';
                    label.style.color = '#ffb700';
                } else {
                    label.textContent = 'низкий шанс';
                    label.style.color = '#eb4b4b';
                }
            }
        }

        function drawUpgradeWheelRotated(chancePercent, angleDeg) {
            const canvas = document.getElementById('upgradeWheelCanvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            const W = canvas.width, H = canvas.height;
            const cx = W / 2, cy = H / 2;
            const outerR = 100, innerR = 68, tickR = 106;

            ctx.clearRect(0, 0, W, H);

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate((angleDeg * Math.PI) / 180);

            // Фон
            ctx.beginPath();
            ctx.arc(0, 0, outerR + 8, 0, Math.PI * 2);
            ctx.fillStyle = '#13161c';
            ctx.fill();

            // Засечки
            for (let i = 0; i < 60; i++) {
                const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
                const isMain = i % 5 === 0;
                const r1 = tickR, r2 = tickR - (isMain ? 9 : 5);

                ctx.beginPath();
                ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
                ctx.lineTo(Math.cos(angle) * r2, Math.sin(angle) * r2);
                ctx.strokeStyle = isMain ? '#3a3f50' : '#252835';
                ctx.lineWidth = isMain ? 2 : 1;
                ctx.stroke();
            }

            const startAngle = -Math.PI / 2;
            const fullAngle = Math.PI * 2;
            const winAngle = (chancePercent / 100) * fullAngle;

            // Проигрышная зона
            if (chancePercent < 100) {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, outerR, startAngle + winAngle, startAngle + fullAngle);
                ctx.closePath();
                ctx.fillStyle = '#2a2e3e';
                ctx.fill();
            }

            // Победная зона
            if (chancePercent > 0) {
                const steps = Math.max(2, Math.round(chancePercent * 1.2));

                for (let s = 0; s < steps; s++) {
                    const a0 = startAngle + (s / steps) * winAngle;
                    const a1 = startAngle + ((s + 1) / steps) * winAngle;
                    const t = s / steps;

                    let r, g, b;

                    if (t < 0.4) {
                        const p = t / 0.4;
                        r = Math.round(40 + p * 215);
                        g = Math.round(167 + p * 20);
                        b = Math.round(40 - p * 40);
                    } else if (t < 0.75) {
                        const p = (t - 0.4) / 0.35;
                        r = 255;
                        g = Math.round(187 - p * 100);
                        b = 0;
                    } else {
                        const p = (t - 0.75) / 0.25;
                        r = 255;
                        g = Math.round(87 - p * 87);
                        b = 0;
                    }

                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.arc(0, 0, outerR, a0, a1);
                    ctx.closePath();
                    ctx.fillStyle = `rgb(${r},${g},${b})`;
                    ctx.fill();
                }
            }

            // Внутренний круг
            ctx.beginPath();
            ctx.arc(0, 0, innerR, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1d27';
            ctx.fill();

            // Обводка
            ctx.beginPath();
            ctx.arc(0, 0, outerR, 0, Math.PI * 2);
            ctx.strokeStyle = '#0d0f15';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, innerR, 0, Math.PI * 2);
            ctx.strokeStyle = '#2a2e3e';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.restore();
        }

        // --- БУСТ ШАНСА ---
        let chanceBoostRubles = 0; // сколько рублей добавляем к ставке

        function applyBoostRub(amount) {
            chanceBoostRubles = Math.max(0, amount || 0);
            const sl = document.getElementById('boostSlider');
            if (sl && parseInt(sl.value) !== chanceBoostRubles) sl.value = Math.min(chanceBoostRubles, parseInt(sl.max));
            calculateUpgradeChance();
        }

        function applyBoostPreset(preset) {
            if (!selectedUpgradeTargetId) return;
            const targetItem = globalSkins.find(x => x.id === selectedUpgradeTargetId);
            if (!targetItem) return;
            const slMax = parseInt(document.getElementById('boostSlider').max) || Math.round(targetItem.price * 0.95);
            let amount;
            if (preset === 'max') {
                amount = Math.min(balance, slMax);
            } else {
                amount = Math.min(Math.round(targetItem.price * preset), balance, slMax);
            }
            applyBoostRub(amount);
        }

        function resetBoost() {
            chanceBoostRubles = 0;
            const sl = document.getElementById('boostSlider');
            if (sl) sl.value = 0;
            calculateUpgradeChance();
        }

        function _updateBoostUI() {
            document.getElementById('boostBalanceDisplay').innerText = balance.toLocaleString('ru-RU') + ' ₽';
        }

        function calculateUpgradeChance() {
            const boostAddedEl = document.getElementById('boostAddedDisplay');
            const boostNewChanceEl = document.getElementById('boostNewChance');
            const formulaEl = document.getElementById('boostFormulaText');

            if (!selectedUpgradeSourceIdx.length || selectedUpgradeTargetId === null) {
                document.getElementById('upgradeChanceVal').innerText = '0%';
                document.getElementById('executeUpgradeBtn').disabled = true;
                const qb = document.getElementById('quickUpgradeBtn');
                if (qb) qb.disabled = true;
                if (boostAddedEl) boostAddedEl.innerText = '+0 ₽';
                if (boostNewChanceEl) boostNewChanceEl.innerText = '—';
                if (formulaEl) formulaEl.innerHTML = 'Выберите скины выше, чтобы увидеть расчёт';
                drawUpgradeWheel(0, false);
                return;
            }

            const totalSrcPrice = selectedUpgradeSourceIdx.reduce((s, i) => s + userInventory[i].price, 0);
            const targetItem = globalSkins.find(x => x.id === selectedUpgradeTargetId);
            const targetPrice = targetItem.price;

            const baseChance = Math.min(80, (totalSrcPrice / targetPrice) * 100);
            const boostedValue = totalSrcPrice + chanceBoostRubles;
            const totalChance = Math.min(80, (boostedValue / targetPrice) * 100);
            const addedPercent = totalChance - baseChance;

            if (formulaEl) {
                if (chanceBoostRubles > 0) {
                    formulaEl.innerHTML =
                        `(<span style="color:#c0cde0">${totalSrcPrice.toLocaleString('ru-RU')} ₽</span> скины` +
                        ` + <span style="color:#ffb700">${chanceBoostRubles.toLocaleString('ru-RU')} ₽</span> буст)` +
                        ` ÷ <span style="color:#eb4b4b">${targetPrice.toLocaleString('ru-RU')} ₽</span>` +
                        ` = <span style="color:#28a745;font-weight:900">${totalChance.toFixed(2)}%</span>`;
                } else {
                    formulaEl.innerHTML =
                        `<span style="color:#c0cde0">${totalSrcPrice.toLocaleString('ru-RU')} ₽</span>` +
                        ` ÷ <span style="color:#eb4b4b">${targetPrice.toLocaleString('ru-RU')} ₽</span>` +
                        ` = <span style="color:#ffb700;font-weight:900">${baseChance.toFixed(2)}%</span>` +
                        (baseChance < 95 ? `<br><span style="color:#8a92a3;font-size:10px;">Сдвиньте ползунок чтобы добавить рубли ↑</span>` : '');
                }
            }

            if (boostAddedEl) boostAddedEl.innerText = chanceBoostRubles > 0
                ? `+${chanceBoostRubles.toLocaleString('ru-RU')} ₽  (+${addedPercent.toFixed(2)}%)`
                : '+0 ₽';
            if (boostNewChanceEl) boostNewChanceEl.innerText = chanceBoostRubles > 0
                ? totalChance.toFixed(2) + '%' : '—';

            document.getElementById('upgradeChanceVal').innerText = totalChance.toFixed(2) + '%';
            document.getElementById('executeUpgradeBtn').disabled = false;
            const qubE = document.getElementById('quickUpgradeBtn');
            if (qubE) qubE.disabled = false;
            document.getElementById('boostBalanceDisplay').innerText = balance.toLocaleString('ru-RU') + ' ₽';
            drawUpgradeWheel(totalChance, false);
            // Обновляем подписи кнопок-пресетов
            const presets = {10: 0.10, 25: 0.25, 50: 0.50, 95: 0.80};
            Object.entries(presets).forEach(([k, v]) => {
                const el = document.getElementById('boostPresetCost' + k);
                if (el) {
                    const cost = Math.min(Math.round(targetPrice * v), balance);
                    el.innerText = cost.toLocaleString('ru-RU') + ' ₽';
                    el.style.color = balance >= Math.round(targetPrice * v) ? '#8a92a3' : '#dc3545';
                }
            });
        }

        function startUpgradeProcess(isQuick) {
            if (!selectedUpgradeSourceIdx.length || selectedUpgradeTargetId === null) return;

            const targetItem = globalSkins.find(x => x.id === selectedUpgradeTargetId);
            const totalSrcPrice = selectedUpgradeSourceIdx.reduce((s, i) => s + userInventory[i].price, 0);

            if (chanceBoostRubles > 0) {
                if (balance < chanceBoostRubles) {
                    showBalanceToast('rub', chanceBoostRubles, balance);
                    return;
                }
                balance -= chanceBoostRubles;
                updateBalancesUI();
            }

            document.getElementById('executeUpgradeBtn').disabled = true;
            const qubD = document.getElementById('quickUpgradeBtn');
            if (qubD) qubD.disabled = true;
            const status = document.getElementById('upgradeStatusText');
            status.style.color = '#ffb700';
            status.innerText = chanceBoostRubles > 0
                ? `⚡ Буст +${chanceBoostRubles.toLocaleString('ru-RU')} ₽ активирован!`
                : '⚡ Синхронизация полей апгрейда...';

            const totalChance = Math.min(80, ((totalSrcPrice + chanceBoostRubles) / targetItem.price) * 100);
            const roll = Math.random() * 100;
            const isWin = roll <= totalChance;

            stats.totalUpgrades++;

            // Победная зона: от 0° до winAngle (= totalChance/100 * 360°), начиная с -90°
            // Проигрышная зона: от winAngle до 360°
            // Стрелка смотрит вверх (270° в CSS = -90°), колесо вращается
            // Финальный угол — случайная точка внутри нужной зоны, с отступом 5% от краёв
            const winZoneDeg = (totalChance / 100) * 360;
            const safeMargin = Math.min(10, winZoneDeg * 0.1); // отступ от границ
            const finalAngle = isWin
                ? -(winZoneDeg * 0.05 + Math.random() * (winZoneDeg * 0.90)) // случайно внутри зелёной зоны
                : -(winZoneDeg + safeMargin + Math.random() * (360 - winZoneDeg - safeMargin * 2)); // случайно внутри красной зоны

            const wheelTotalDuration = isQuick ? 3500 : (7000 + Math.random() * 3000);
            const targetRotation = (360 * (isQuick ? 8 : 16)) + finalAngle;
            let wheelStartTime = null;
            function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

            // Запоминаем индексы ДО анимации (они могут измениться)
            const srcIndices = [...selectedUpgradeSourceIdx];

            function animateWheel(timestamp) {
                if (!wheelStartTime) wheelStartTime = timestamp;
                const progress = Math.min((timestamp - wheelStartTime) / wheelTotalDuration, 1);
                drawUpgradeWheelRotated(totalChance, targetRotation * easeOutCubic(progress));

                if (progress < 1) {
                    requestAnimationFrame(animateWheel);
                } else {
                    drawUpgradeWheelRotated(totalChance, finalAngle);
                    resetBoost();

                    // Считаем сумму ДО удаления скинов
                    const burntTotal = srcIndices.reduce((sum, idx) => sum + (userInventory[idx]?.price || 0), 0);
                    const consolationCoins = Math.max(1, Math.round(burntTotal * 0.05));

                    // Удаляем все выбранные скины (сортируем по убыванию чтобы splice не ломал индексы)
                    const sortedIndices = [...srcIndices].sort((a, b) => b - a);
                    sortedIndices.forEach(idx => userInventory.splice(idx, 1));

                    if (isWin) {
                        userInventory.push({ ...targetItem, uid: Date.now() + Math.random() });
                        status.style.color = '#28a745';
                        status.innerText = `УСПЕХ! Вы получили ${targetItem.weapon} | ${targetItem.skin}!`;
                        addDropToFeed(targetItem, true);
                    } else {
                        bonusBalance += consolationCoins;
                        status.style.color = '#dc3545';
                        status.innerText = `НЕУДАЧА! Предметы сгорели. Компенсация: +${consolationCoins} 🪙`;
                    }
                    renderInventory();
                    initUpgradePage();
                    updateStatsUI();
                    updateBalancesUI();
                    if (isWin) showUpgradeResult(true, targetItem, 0);
                    else showUpgradeResult(false, null, consolationCoins);
                }
            }
            requestAnimationFrame(animateWheel);
        }

        // --- МОДУЛЬ КОНТРАКТОВ ---
        function initContractsPage() {
            selectedContractIndices = [];
            document.getElementById('contractCount').innerText = '0';
            document.getElementById('contractTotalPrice').innerText = '0 ₽';
            document.getElementById('executeContractBtn').disabled = true;
            document.getElementById('contractStatusText').innerText = '';

            const invList = document.getElementById('contractInventory');
            invList.innerHTML = '';

            userInventory.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = 'mini-skin-card';
                el.style.borderBottomColor = getRarityColor(item.rarity);
                
                el.innerHTML = `
                    <div class="mini-skin-info-top">${item.weapon} | ${item.skin}</div>
                    <div class="mini-skin-price-top">${item.price} ₽</div>
                    <img src="${item.img}">
                `;

                el.onclick = () => {
                    if (el.classList.contains('selected')) {
                        el.classList.remove('selected');
                        selectedContractIndices = selectedContractIndices.filter(i => i !== index);
                    } else {
                        if (selectedContractIndices.length >= 10) { alert('Максимум 10 предметов!'); return; }
                        el.classList.add('selected');
                        selectedContractIndices.push(index);
                    }
                    updateContractSummary();
                };
                invList.appendChild(el);
            });
        }

        function updateContractSummary() {
            let total = 0;
            selectedContractIndices.forEach(idx => { total += userInventory[idx].price; });
            
            document.getElementById('contractCount').innerText = selectedContractIndices.length;
            document.getElementById('contractTotalPrice').innerText = total + ' ₽';
            
            document.getElementById('executeContractBtn').disabled = selectedContractIndices.length < 3;
        }

        function startContractProcess() {
            if (selectedContractIndices.length < 3) return;

            document.getElementById('executeContractBtn').disabled = true;
            const status = document.getElementById('contractStatusText');
            status.style.color = '#a800ff';
            status.innerText = '📜 Документы подписываются...';

            let combinedValue = 0;
            selectedContractIndices.forEach(idx => { combinedValue += userInventory[idx].price; });

            const targetBudget = combinedValue * (0.8 + Math.random() * 1.2);
            
            let closestSkin = globalSkins[0];
            let minDiff = Math.abs(globalSkins[0].price - targetBudget);
            
            globalSkins.forEach(skin => {
                let diff = Math.abs(skin.price - targetBudget);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestSkin = skin;
                }
            });

            setTimeout(() => {
                selectedContractIndices.sort((a, b) => b - a);
                selectedContractIndices.forEach(idx => { userInventory.splice(idx, 1); });

                userInventory.push({ ...closestSkin, uid: Date.now() + Math.random() });
                
                status.style.color = '#28a745';
                status.innerText = `КОНТРАКТ ВЫПОЛНЕН! Получено: ${closestSkin.weapon} | ${closestSkin.skin}`;
                
                addDropToFeed(closestSkin, true);
                renderInventory();
                initContractsPage();
                updateBalancesUI();
            }, 2000);
        }

        // --- МОДУЛЬ PvP БАТТЛОВ ---
        let battleRounds = 1;

        function setBattleRounds(n, btn) {
            battleRounds = n;
            document.querySelectorAll('[id^=battleRndBtn]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        function runCaseBattle() {
            const caseId = document.getElementById('battleCaseSelect').value;
            const c = casesData.find(x => x.id === caseId);
            const totalRolls = battleRounds;

            const totalCost = c.price * totalRolls;
            if (c.currency === 'rub') {
                if (balance < totalCost) {
                    showBalanceToast('rub', totalCost, balance);
                    return;
                }
                balance -= totalCost;
            } else {
                if (bonusBalance < totalCost) {
                    showBalanceToast('coin', totalCost, bonusBalance);
                    return;
                }
                bonusBalance -= totalCost;
            }
            updateBalancesUI();

            document.getElementById('startBattleBtn').disabled = true;
            const arena = document.getElementById('battleArena');
            arena.style.display = 'grid';

            const userDropsDiv = document.getElementById('battleUserDrops');
            const botDropsDiv = document.getElementById('battleBotDrops');
            userDropsDiv.innerHTML = '';
            botDropsDiv.innerHTML = '';

            document.getElementById('battleUserScore').innerText = '0 ₽';
            document.getElementById('battleBotScore').innerText = '0 ₽';

            const botsNames = ['Гейб', 'Капитан Прайс', 'Джон Вик', 'Нео', 'Скиллаут'];
            let bName;
            document.getElementById('battleBotName').innerText = bName = botsNames[Math.floor(Math.random() * botsNames.length)] + ' (Бот)';

            let userSum = 0;
            let botSum = 0;
            let currentRoll = 0;
            const userWonItems = [];
            const botWonItems = [];

            function openRound() {
                if (currentRoll >= totalRolls) {
                    // Показываем результат через 800мс после последнего раунда
                    setTimeout(() => {
                        const userWon = userSum >= botSum;
                        if (userWon) {
                            // Пользователь выигрывает — получает и свои, и предметы противника
                            botWonItems.forEach(item => {
                                userInventory.push({ ...item, uid: Date.now() + Math.random() });
                            });
                            renderInventory();
                            showBattleResult(true, userSum, botSum, bName);
                        } else {
                            // Проигрыш — убираем предметы
                            userInventory.splice(userInventory.length - totalRolls, totalRolls);
                            renderInventory();
                            showBattleResult(false, userSum, botSum, bName);
                        }
                        document.getElementById('startBattleBtn').disabled = false;
                    }, 800);
                    return;
                }

                const uWinId = getRandomItemWithWeights(c.items, c.weights);
                const uItem = globalSkins.find(s => s.id === uWinId);
                userInventory.push({ ...uItem, uid: Date.now() + Math.random() });
                userWonItems.push(uItem);
                userSum += uItem.price;

                const uCard = document.createElement('div');
                uCard.className = 'inventory-card';
                uCard.style.borderBottomColor = getRarityColor(uItem.rarity);
                uCard.style.padding = '8px';
                uCard.style.minHeight = '110px';
                uCard.innerHTML = `
                    <div class="inv-name">${uItem.weapon}</div>
                    <div class="inv-price">${uItem.price} ₽</div>
                    <img src="${uItem.img}" style="width:40px; height:40px;">
                `;
                userDropsDiv.appendChild(uCard);
                document.getElementById('battleUserScore').innerText = userSum + ' ₽';

                setTimeout(() => {
                    const bWinId = c.items[Math.floor(Math.random() * c.items.length)];
                    const bItem = globalSkins.find(s => s.id === bWinId);
                    botWonItems.push(bItem);
                    botSum += bItem.price;

                    const bCard = document.createElement('div');
                    bCard.className = 'inventory-card';
                    bCard.style.borderBottomColor = getRarityColor(bItem.rarity);
                    bCard.style.padding = '8px';
                    bCard.style.minHeight = '110px';
                    bCard.innerHTML = `
                        <div class="inv-name">${bItem.weapon}</div>
                        <div class="inv-price">${bItem.price} ₽</div>
                        <img src="${bItem.img}" style="width:40px; height:40px;">
                    `;
                    botDropsDiv.appendChild(bCard);
                    document.getElementById('battleBotScore').innerText = botSum + ' ₽';

                    currentRoll++;
                    setTimeout(openRound, 1200);
                }, 400);
            }

            setTimeout(openRound, 500);
        }

        function showBattleResult(isWin, userSum, botSum, botName) {
            const overlay = document.getElementById('upgradeResultOverlay');
            const box = document.getElementById('upgradeResultBox');
            const icon = document.getElementById('upgradeResultIcon');
            const label = document.getElementById('upgradeResultLabel');
            const skinName = document.getElementById('upgradeResultSkinName');
            const skinPrice = document.getElementById('upgradeResultSkinPrice');
            const img = document.getElementById('upgradeResultImg');
            const subtext = document.getElementById('upgradeResultSubtext');
            const btn = document.getElementById('upgradeResultBtn');

            overlay.querySelectorAll('.confetti-particle').forEach(el => el.remove());
            img.style.display = 'none';

            if (isWin) {
                overlay.className = 'upgrade-result-overlay win';
                box.className = 'upgrade-result-box win';
                icon.textContent = '🏆';
                label.className = 'upgrade-result-label win';
                label.textContent = 'ПОБЕДА!';
                skinName.textContent = 'Ваш счёт: ' + userSum + ' ₽  vs  ' + botSum + ' ₽';
                skinPrice.className = 'upgrade-result-skin-price win';
                skinPrice.textContent = 'Вы забираете все предметы!';
                subtext.textContent = botName + ' проиграл.';
                btn.className = 'btn-upgrade-result-close win';
                btn.textContent = 'Забрать победу!';
                spawnConfetti(overlay);
            } else {
                overlay.className = 'upgrade-result-overlay lose';
                box.className = 'upgrade-result-box lose';
                icon.textContent = '💀';
                label.className = 'upgrade-result-label lose';
                label.textContent = 'ПОРАЖЕНИЕ!';
                skinName.textContent = 'Ваш счёт: ' + userSum + ' ₽  vs  ' + botSum + ' ₽';
                skinPrice.className = 'upgrade-result-skin-price lose';
                skinPrice.textContent = 'Предметы уходят ' + botName;
                subtext.textContent = 'Не повезло. Попробуй ещё раз!';
                btn.className = 'btn-upgrade-result-close lose';
                btn.textContent = 'Попробовать снова';
            }

            overlay.style.display = 'flex';
        }

        // --- МОДУЛЬ ИНВЕНТАРЯ И ПРОДАЖИ ---
        function renderInventory() {
            // Всегда обновляем счётчик
            document.getElementById('invCountHeader').innerText = userInventory.length;

            const grid = document.getElementById('inventoryGrid');
            if (!grid) return;

            // Кнопка продажи всего
            const sellAllBtn = document.getElementById('sellAllBtn');
            if (sellAllBtn) sellAllBtn.disabled = userInventory.length === 0;

            grid.innerHTML = '';

            if (userInventory.length === 0) {
                grid.innerHTML = '<div style="color:#8a92a3; grid-column:span 5; text-align:center; padding:40px;">Ваш инвентарь пуст. Откройте несколько кейсов!</div>';
                return;
            }

            userInventory.forEach(item => {
                const card = document.createElement('div');
                card.className = 'inventory-card';
                card.style.borderBottomColor = getRarityColor(item.rarity);

                card.innerHTML = `
                    <div class="inv-name" title="${item.weapon} | ${item.skin}">${item.weapon} | ${item.skin}</div>
                    <div class="inv-price">${item.price} ₽</div>
                    <img src="${item.img}" alt="скин">
                    <button class="btn-sell" onclick="sellItem(${item.uid})">Продать</button>
                `;
                grid.appendChild(card);
            });
        }

        function sellItem(uid) {
            const idx = userInventory.findIndex(x => x.uid === uid);
            if (idx !== -1) {
                balance += userInventory[idx].price;
                userInventory.splice(idx, 1);
                renderInventory();
                updateBalancesUI();
            }
        }

        // --- СИМУЛЯЦИЯ ВЫВОДА В STEAM ---
        function initWithdrawPage() {
            const container = document.getElementById('withdrawInventory');
            container.innerHTML = '';

            if (userInventory.length === 0) {
                container.innerHTML = '<div style="color:#8a92a3; padding:20px;">Нет доступных скинов для вывода</div>';
                return;
            }

            userInventory.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = 'mini-skin-card';
                el.style.borderBottomColor = getRarityColor(item.rarity);
                el.style.minHeight = '130px';
                
                el.innerHTML = `
                    <div class="mini-skin-info-top">${item.weapon} | ${item.skin}</div>
                    <div class="mini-skin-price-top">${item.price} ₽</div>
                    <img src="${item.img}" style="margin-bottom:8px;">
                    <button class="btn-withdraw-action" onclick="requestSteamWithdraw(${index})">Вывести</button>
                `;
                container.appendChild(el);
            });
        }

        function requestSteamWithdraw(index) {
    const item = userInventory[index];
    const logs = document.getElementById('withdrawLogs');

    // Проверка наличия и валидности трейд-ссылки
    if (!savedTradeUrl || !savedTradeUrl.includes('steamcommunity.com/tradeoffer/new/') || !savedTradeUrl.includes('partner=') || !savedTradeUrl.includes('token=')) {
        const errorLine = document.createElement('div');
        errorLine.className = 'log-line';
        errorLine.style.borderLeftColor = '#eb4b4b';
        errorLine.innerHTML = `<strong>[Ошибка]</strong> ❌ Невозможно отправить трейд: не сохранена корректная трейд-ссылка. Перейдите во вкладку «Вывод скинов» и сохраните ссылку.`;
        logs.insertBefore(errorLine, logs.firstChild);
        return;
    }

    if (withdrawLogsCounter === 0) logs.innerHTML = '';
    withdrawLogsCounter++;

    const withdrawId = 'wlog_' + Date.now();
    const logLine = document.createElement('div');
    logLine.className = 'log-line';
    logLine.id = withdrawId;
    logLine.innerHTML = `<strong>[Запрос #${withdrawLogsCounter}]</strong> Отправка запроса на вывод ${item.weapon}...`;
    logs.insertBefore(logLine, logs.firstChild);

    userInventory.splice(index, 1);
    initWithdrawPage();
    renderInventory();

    continueWithdrawChain(withdrawId, item);
}

        function continueWithdrawChain(withdrawId, item) {
            const line = document.getElementById(withdrawId);
            
            setTimeout(() => {
                if (!isVerified) {
                    line.style.borderLeftColor = '#eb4b4b';
                    line.innerHTML = `<strong>[Ошибка]</strong> ❌ Трейд отклонен. Причина: Аккаунт не верифицирован.`;
                } else {
                    line.style.borderLeftColor = '#28a745';
                    line.innerHTML = `<strong>[Успех]</strong>  Трейд успешно отправлен! Проверьте ваш Steam. Предмет "${item.weapon} | ${item.skin}" передан.`;
                    stats.totalWithdrawn += item.price;
                    updateStatsUI();
                }
            }, 1500);
        }

        // --- STEAM АВТОРИЗАЦИЯ (симуляция) ---
        const steamNicknames = ['Prodigy99', 'ShadowWolf', 'xX_N1TR0_Xx', 'KnifeMaster', 'csgo_rat', 'MrFreeze47', 'DragonBorn', 'QuantumSniper'];
        let steamLoggedIn = false;
        let savedTradeUrl = '';

        function steamLogin() {
            // Симуляция — выбираем случайный ник
            const nick = steamNicknames[Math.floor(Math.random() * steamNicknames.length)];
            steamLoggedIn = true;
            document.getElementById('steamNickname').textContent = nick;
            document.getElementById('steamLoginBtn').style.display = 'none';
            document.getElementById('steamUserInfo').style.display = 'block';
            // Снимаем ограничения верификации при входе через стим
            isVerified = true;
            updateBalancesUI();
        }

        function steamLogout() {
            steamLoggedIn = false;
            document.getElementById('steamLoginBtn').style.display = 'block';
            document.getElementById('steamUserInfo').style.display = 'none';
        }

        // --- ТРЕЙД-ССЫЛКА ---
        function saveTradeUrl() {
            const input = document.getElementById('tradeUrlInput');
            const status = document.getElementById('tradeUrlStatus');
            const val = input.value.trim();

            if (!val) {
                status.style.color = '#eb4b4b';
                status.textContent = '⚠️ Введите ссылку перед сохранением';
                return;
            }
            if (!val.includes('steamcommunity.com/tradeoffer/new/') || !val.includes('partner=') || !val.includes('token=')) {
                status.style.color = '#eb4b4b';
                status.textContent = '❌ Неверный формат. Проверьте ссылку (нужен partner= и token=)';
                return;
            }
            savedTradeUrl = val;
            status.style.color = '#28a745';
            status.textContent = '✅ Трейд-ссылка сохранена! Теперь вывод активен.';
            isVerified = true;
            updateBalancesUI();
        }
        function activatePromo() {
            const input = document.getElementById('promoInput');
            const code = input.value.trim().toUpperCase();

            if (code === 'START') {
                balance += 500;
                bonusBalance += 1000;
                alert('Промокод активирован! Начислено: 500 ₽ и 1000 🪙');
            } else if (code === 'MEGA2026') {
                balance += 5000;
                bonusBalance += 10000;
                alert('Супер-промокод активирован! Начислено: 5000 ₽ и 10000 🪙');
            } else {
                alert('Промокод не найден или устарел.');
            }
            input.value = '';
            updateBalancesUI();
        }

        // --- ВСПОМОГАТЕЛЬНЫЙ ИНТЕРФЕЙС UI ---
        function updateBalancesUI() {
            document.getElementById('ui-balance').innerText = balance;
            document.getElementById('ui-bonus').innerText = bonusBalance;
            const bbd = document.getElementById('boostBalanceDisplay');
            if (bbd) bbd.innerText = balance.toLocaleString('ru-RU') + ' ₽';
        }

        function updateStatsUI() {
            document.getElementById('statCases').innerText = stats.totalCases;
            document.getElementById('statUpgrades').innerText = stats.totalUpgrades;
            document.getElementById('statWithdrawn').innerText = stats.totalWithdrawn + ' ₽';
            document.getElementById('statMaxDrop').innerText = stats.maxDrop + ' ₽';
        }

        function getRarityColor(rarity) {
    if (rarity === 'common') return '#b0c3d9';
    if (rarity === 'uncommon') return '#5e98d9';
    if (rarity === 'restricted') return '#8847ff';
    if (rarity === 'classified') return '#d32ce6';
    if (rarity === 'covert') return '#eb4b4b';
    if (rarity === 'gold') return '#ffb700';

    return '#b0c3d9';
}

        // --- УПРАВЛЕНИЕ СИСТЕМОЙ ТЕХПОДДЕРЖКИ ---
        function toggleSupportChat() {
            const chat = document.getElementById('supportChat');
            chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
        }

        function sendSupportMessage() {
            const input = document.getElementById('supportInput');
            const text = input.value.trim();
            if (!text) return;

            const msgDiv = document.getElementById('supportMessages');
            
            const uMsg = document.createElement('div');
            uMsg.className = 'msg user';
            uMsg.innerText = text;
            msgDiv.appendChild(uMsg);
            input.value = '';
            msgDiv.scrollTop = msgDiv.scrollHeight;

            setTimeout(() => {
                const bMsg = document.createElement('div');
                bMsg.className = 'msg bot';
                
                const unverifiedReplies = [
                    'Внимание! Для активации вывода скинов и разблокировки трейд-сессии вам необходимо верифицировать аккаунт, пополнив баланс на 500 рублей.',
                    '🔒 Ваш аккаунт ещё не верифицирован. Пополните баланс на 500 ₽ — это разблокирует вывод предметов в Steam.',
                    'Привет! Похоже, ваш аккаунт не прошёл верификацию. Для вывода скинов пополните баланс от 500 ₽ любым удобным способом.',
                    'Здравствуйте! Трейды заблокированы из-за непройденной верификации. Один быстрый платёж — и всё заработает!',
                    '⚠️ Для активации вывода необходимо пополнение. Без этого Steam-трейд не откроется. Пополните от 500 ₽ и пишите снова!'
                ];
                const verifiedReplies = [
                    'На нашем сайте абсолютно честная система дропа! У всех пользователей равные шансы. Рандом основан на алгоритмах Provably Fair. Удачи!',
                    '😊 Привет! Рады вам помочь. Если возникли вопросы по открытию кейсов или апгрейду — пишите, поможем разобраться!',
                    'Ваш аккаунт верифицирован. Вы можете выводить скины в Steam без ограничений. Есть вопросы — задавайте!',
                    '🎰 Всё работает в штатном режиме. Наш алгоритм дропа проверен и честен. Пусть вам выпадет нож!',
                    'Добрый день! На сайте проблем нет. Если кейс не открылся — обновите страницу. Баланс сохраняется. Удачи в открытиях!',
                    'Привет! По техническим вопросам — пишите сюда. Обычно мы отвечаем в течение минуты. Сайт работает стабильно.',
                    '✅ Верификация пройдена. Вывод в Steam доступен. Хорошей игры и жирных дропов! 🔥',
                    'Спасибо за обращение! Ваши предметы в безопасности. Для вывода перейдите во вкладку «Вывод скинов».',
                ];
                
                const pool = !isVerified ? unverifiedReplies : verifiedReplies;
                bMsg.innerText = pool[Math.floor(Math.random() * pool.length)];
                
                msgDiv.appendChild(bMsg);
                msgDiv.scrollTop = msgDiv.scrollHeight;
            }, 700);
        }

        // --- ОВЕРЛЕЙ РЕЗУЛЬТАТА АПГРЕЙДА ---
        function showUpgradeResult(isWin, item, consolationCoins) {
            const overlay = document.getElementById('upgradeResultOverlay');
            const box = document.getElementById('upgradeResultBox');
            const icon = document.getElementById('upgradeResultIcon');
            const label = document.getElementById('upgradeResultLabel');
            const skinName = document.getElementById('upgradeResultSkinName');
            const skinPrice = document.getElementById('upgradeResultSkinPrice');
            const img = document.getElementById('upgradeResultImg');
            const subtext = document.getElementById('upgradeResultSubtext');
            const btn = document.getElementById('upgradeResultBtn');

            // Очистка конфетти
            overlay.querySelectorAll('.confetti-particle').forEach(el => el.remove());

            if (isWin) {
                overlay.className = 'upgrade-result-overlay win';
                box.className = 'upgrade-result-box win';
                icon.textContent = '🏆';
                label.className = 'upgrade-result-label win';
                label.textContent = 'ВЫИГРАЛ!';
                skinName.textContent = item.weapon + ' | ' + item.skin;
                skinPrice.className = 'upgrade-result-skin-price win';
                skinPrice.textContent = '+' + item.price + ' ₽';
                img.src = item.img;
                img.style.display = 'block';
                subtext.textContent = 'Скин добавлен в ваш инвентарь!';
                btn.className = 'btn-upgrade-result-close win';
                btn.textContent = 'Забрать награду!';
                // Конфетти
                spawnConfetti(overlay);
            } else {
                overlay.className = 'upgrade-result-overlay lose';
                box.className = 'upgrade-result-box lose';
                icon.textContent = '💀';
                label.className = 'upgrade-result-label lose';
                label.textContent = 'ПРОИГРАЛ!';
                skinName.textContent = 'Предметы уничтожены';
                skinPrice.className = 'upgrade-result-skin-price lose';
                skinPrice.textContent = 'Деньги не возвращаются';
                img.style.display = 'none';
                subtext.textContent = 'Не везёт — бывает. Попробуй ещё раз!';
                btn.className = 'btn-upgrade-result-close lose';
                btn.textContent = 'Попробовать снова';
            }

            overlay.style.display = 'flex';
        }

        function closeUpgradeResult() {
            document.getElementById('upgradeResultOverlay').style.display = 'none';
        }

        function spawnConfetti(container) {
            const colors = ['#28a745','#ffb700','#00e5ff','#fff','#a3ff70','#f9d423'];
            for (let i = 0; i < 40; i++) {
                const p = document.createElement('div');
                p.className = 'confetti-particle';
                p.style.left = Math.random() * 100 + '%';
                p.style.top = '-10px';
                p.style.background = colors[Math.floor(Math.random() * colors.length)];
                p.style.animationDuration = (1.2 + Math.random() * 1.5) + 's';
                p.style.animationDelay = (Math.random() * 0.6) + 's';
                p.style.width = (6 + Math.random() * 8) + 'px';
                p.style.height = (6 + Math.random() * 8) + 'px';
                container.appendChild(p);
            }
        }

        // --- ПОИСК В АПГРЕЙДЕ ---
        function filterUpgradeInventory(query) {
            const q = query.toLowerCase().trim();
            document.querySelectorAll('#upgradeInventory .mini-skin-card').forEach((el, idx) => {
                const item = userInventory[idx];
                if (!item) return;
                const match = !q || (item.weapon + ' ' + item.skin).toLowerCase().includes(q) || String(item.price).includes(q);
                el.style.display = match ? '' : 'none';
            });
        }

        function filterUpgradeGlobalSkins(query) {
            const q = query.toLowerCase().trim();
            document.querySelectorAll('#upgradeGlobalSkins .mini-skin-card').forEach(el => {
                const name = (el.querySelector('.mini-skin-info-top')?.textContent || '').toLowerCase();
                const price = (el.querySelector('.mini-skin-price-top')?.textContent || '').toLowerCase();
                const match = !q || name.includes(q) || price.includes(q);
                el.style.display = match ? '' : 'none';
            });
        }

                // --- УВЕДОМЛЕНИЕ О НЕХВАТКЕ БАЛАНСА ---
        let toastTimeout = null;
        function showBalanceToast(currency, needed, have) {
            const toast = document.getElementById('balanceToast');
            const msg = document.getElementById('balanceToastMsg');
            const diff = needed - have;
            if (currency === 'rub') {
                msg.textContent = `Недостаточно средств! Нужно ещё ${diff} ₽ (требуется ${needed} ₽, есть ${have} ₽)`;
            } else {
                msg.textContent = `Недостаточно монет! Нужно ещё ${diff} 🪙 (требуется ${needed} 🪙, есть ${have} 🪙)`;
            }
            toast.classList.add('show');
            if (toastTimeout) clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
        }

        // --- ПРОФИЛЬ ---
        let recentCasesHistory = [];
        let bestDrop = null;

        function toggleProfilePanel() {
            const panel = document.getElementById('profilePanel');
            const isVisible = panel.style.display === 'block';
            panel.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) updateProfilePanel();
        }

        function updateProfilePanel() {
            // Никнейм
            const nick = document.getElementById('steamNickname')?.textContent || 'Гость';
            document.getElementById('profileNickname').textContent = steamLoggedIn ? nick : 'Гость (не авторизован)';
            // Баланс
            document.getElementById('profileBalance').textContent = balance.toLocaleString('ru-RU') + ' ₽';
            document.getElementById('profileCoins').textContent = bonusBalance.toLocaleString('ru-RU') + ' 🪙';
            // Трейд-ссылка
            const tradeEl = document.getElementById('profileTradeUrl');
            if (savedTradeUrl) {
                const short = savedTradeUrl.substring(0, 40) + '…';
                tradeEl.textContent = short;
                tradeEl.style.color = '#28a745';
            } else {
                tradeEl.textContent = 'не сохранена';
                tradeEl.style.color = '#8a92a3';
            }
            // Последние кейсы
            const casesList = document.getElementById('profileRecentCases');
            if (recentCasesHistory.length === 0) {
                casesList.innerHTML = '<div style="color:#8a92a3; font-size:12px;">Кейсы ещё не открывались</div>';
            } else {
                casesList.innerHTML = recentCasesHistory.slice(-6).reverse().map(entry => `
                    <div class="profile-case-entry">
                        <span class="profile-case-name">${entry.caseName}</span>
                        <span class="profile-case-time">${entry.time}</span>
                    </div>
                `).join('');
            }
            // Лучший дроп
            const dropEl = document.getElementById('profileBestDrop');
            if (!bestDrop) {
                dropEl.innerHTML = '<div style="color:#8a92a3; font-size:12px;">Откройте кейс, чтобы увидеть дроп</div>';
            } else {
                const rarityColors = { common:'#b0c3d9', uncommon:'#5e98d9', restricted:'#8847ff', classified:'#d32ce6', covert:'#eb4b4b', gold:'#ffb700' };
                const color = rarityColors[bestDrop.rarity] || '#fff';
                dropEl.innerHTML = `
                    <img src="${bestDrop.img}" alt="дроп">
                    <div class="profile-drop-info">
                        <div class="profile-drop-name" style="color:${color};">${bestDrop.weapon} | ${bestDrop.skin}</div>
                        <div class="profile-drop-price">${bestDrop.price.toLocaleString('ru-RU')} ₽</div>
                        <div class="profile-drop-rarity">Из: ${bestDrop.fromCase || '—'}</div>
                    </div>
                `;
            }
        }

        function recordCaseOpen(caseName, droppedItem) {
            const now = new Date();
            const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
            recentCasesHistory.push({ caseName, time });
            if (recentCasesHistory.length > 20) recentCasesHistory.shift();
            if (!bestDrop || droppedItem.price > bestDrop.price) {
                bestDrop = { ...droppedItem, fromCase: caseName };
            }
        }

        // Закрыть панель профиля при клике вне
        document.addEventListener('click', function(e) {
            const panel = document.getElementById('profilePanel');
            const trigger = document.querySelector('.btn-profile-trigger');
            if (panel && panel.style.display === 'block') {
                if (!panel.contains(e.target) && !trigger.contains(e.target)) {
                    panel.style.display = 'none';
                }
            }
        });

        // --- ПРОДАТЬ ВЕСЬ ИНВЕНТАРЬ ---
        function openSellAllModal() {
            const total = userInventory.reduce((sum, item) => sum + item.price, 0);
            document.getElementById('sellAllTotalDisplay').textContent = '+' + total.toLocaleString('ru-RU') + ' ₽';
            document.getElementById('sellAllModal').style.display = 'flex';
        }

        function closeSellAllModal() {
            document.getElementById('sellAllModal').style.display = 'none';
        }

        function confirmSellAll() {
            const total = userInventory.reduce((sum, item) => sum + item.price, 0);
            balance += total;
            userInventory.splice(0, userInventory.length);
            closeSellAllModal();
            renderInventory();
            updateBalancesUI();
        }

        // --- ПЕРВИЧНЫЙ ЗАПУСК ---
        window.onload = function() {
            renderCasesMenu();
            renderInventory();
            initLiveFeedSimulation();
            initOnlineCounter();
            updateBalancesUI();
            updateStatsUI();

            // Живой поиск кейсов
            const csi = document.getElementById('casesSearchInput');
            if (csi) csi.addEventListener('input', renderCasesMenu);

            // Поиск в апгрейде — инвентарь
            const uis = document.getElementById('upgradeInventorySearch');
            if (uis) uis.addEventListener('input', () => filterUpgradeInventory(uis.value));

            // Поиск в апгрейде — глобальные скины
            const ugs = document.getElementById('upgradeGlobalSearch');
            if (ugs) ugs.addEventListener('input', () => filterUpgradeGlobalSkins(ugs.value));
        };
    </script>