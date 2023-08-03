// ==UserScript==
// @name         SGA Monitor
// @namespace    SGA Monitor - Escala
// @version      1.0.5
// @downloadURL  https://raw.githubusercontent.com/brunomattos-b/SGA/main/SGA.js
// @updateURL    https://raw.githubusercontent.com/brunomattos-b/SGA/main/SGA.js
// @description  Exibe a escala do dia, e notifica quando o servidor tem que ir pro atendimento
// @author       Bruno Mattos Barbalho
// @match        http*://10.0.0.43/novosga/public/modules/sga.monitor
// @icon         http*://www.google.com/s2/favicons?sz=64&domain=0.43
// @grant        GM_addStyle
// ==/UserScript==

async function main()
{
    let usuario = document.querySelector("body > nav > div > div.collapse.navbar-collapse.novosga-navbar > ul.nav.navbar-nav.navbar-right > li > a").innerHTML;

    let names = ["Bonin", "Cinthia", "Dimas", "Ewerton", "Flávia", "Ligia", "Marcelo", "Mattos", "Rafael"];
    let servidor = "Unknown";

    for (var i = 0; i < names.length; i++)
    {
        if (usuario.includes(names[i]))
        {
            servidor = names[i];
            break;
        }
    }

    console.log(`Você está logado como: ${servidor}`);

    console.log("Loading... Please wait...");

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let formattedDate = ("0" + day).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + year;

    let data = [
        ["03/08/2023", "Vanessa", "Mattos", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia"],
        ["04/08/2023", "Jéssica", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Mattos", "Ligia", "Rafael", "Dimas"],
        ["07/08/2023", "Vanessa", "Ewerton", "Mattos", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin"],
        ["08/08/2023", "Jéssica", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo"],
        ["09/08/2023", "Vanessa", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia"],
        ["10/08/2023", "Jéssica", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia"],
        ["11/08/2023", "Vanessa", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia"],
        ["14/08/2023", "Jéssica", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael"],
        ["15/08/2023", "Vanessa", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin"],
        ["16/08/2023", "Jéssica", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas"],
        ["17/08/2023", "Vanessa", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton"],
        ["18/08/2023", "Jéssica", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo"],
        ["21/08/2023", "Vanessa", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia"],
        ["22/08/2023", "Jéssica", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia"],
        ["23/08/2023", "Vanessa", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia"],
        ["24/08/2023", "Jéssica", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael"],
        ["25/08/2023", "Vanessa", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin"],
        ["28/08/2023", "Larissa", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas"],
        ["29/08/2023", "Vanessa", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton"],
        ["30/08/2023", "Larissa", "Dimas", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Ewerton", "Bonin"],
        ["31/08/2023", "Vanessa", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia"],
        ["01/09/2023", "Larissa", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo"],
        ["04/09/2023", "Vanessa", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia"],
        ["05/09/2023", "Larissa", "Rafael", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia"],
        ["06/09/2023", "Vanessa", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia"],
        ["11/09/2023", "Larissa", "Dimas", "Marcelo", "Flávia", "Cinthia", "Bonin", "Ewerton", "Ligia", "Rafael"],
        ["12/09/2023", "Vanessa", "Ewerton", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Mattos", "Bonin"],
        ["13/09/2023", "Larissa", "Marcelo", "Flávia", "Mattos", "Bonin", "Ewerton", "Ligia", "Rafael", "Dimas"],
        ["14/09/2023", "Vanessa", "Ligia", "Rafael", "Dimas", "Marcelo", "Flávia", "Bonin", "Ewerton", "Mattos"]
    ];

    let todayData = data.find(function (entry) {
        return entry[0] === formattedDate;
    });

    let employees = todayData ? todayData.slice(1) : [];
    let absentEmployees = [];

    document.querySelector("head > title").innerHTML = "Novo SGA | Loading...";
    document.querySelector("body > div.container > div > div.header > h2").innerText = "Loading...";
    document.querySelector("body > div.container > div > div.header > p").innerText = "Please wait...";
    document.querySelector("#footer > p").innerText = "Developed by Bruno Mattos";

    await sleep(1000);

    let listContainer = document.createElement("ul");

    listContainer.style.position = "fixed";
    listContainer.style.top = "10%";
    listContainer.style.left = "10px";
    listContainer.style.padding = "0";

    employees.forEach((employee) => {
        let listItem = document.createElement("li");
        listItem.style.listStyle = "none";
        listItem.style.marginBottom = "0px";
        listItem.style.display = "flex";
        listItem.style.alignItems = "center";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = employee;
        checkbox.style.marginRight = "10px";

        let label = document.createElement("label");
        label.textContent = employee;
        label.style.fontFamily = "Arial, sans-serif";
        label.style.marginTop = "09px";

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        listContainer.appendChild(listItem);
    });

    let containerElement = document.querySelector("body > div.container");
    containerElement.appendChild(listContainer);

    var textElement = document.createElement("div");
    textElement.style.position = "fixed";
    textElement.style.bottom = "10px";
    textElement.style.left = "10px";
    textElement.textContent = "Escala de 03/08/2023 a 14/09/2023 (v1.0.5)";

    document.body.appendChild(textElement);

    function sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function passwords()
    {
        let passwords = [];
        let queue = document.querySelector("#servico-1 > ul").childElementCount;

        for (let i = 1; i <= queue; i++)
        {
            let password = formatTime(document.querySelector("#servico-1 > ul > li:nth-child(" + i + ") > a").title);
            passwords.push(password);
        }
        return passwords;
    }

    function formatTime(unFormattedTime)
    {
        let formattedTime = '';
        for (let i = 9; i > 1; i--)
        {
            formattedTime += (unFormattedTime[unFormattedTime.length - i]);
        }
        return(formattedTime);
    }

    function latestTime(times)
    {
        let latest = times[0];

        for (let i = 1; i < times.length; i++)
        {
            if (times[i] > latest)
            {
                latest = times[i];
            }
        }
        return latest;
    }

    function saveCheckboxState()
    {
        let checkboxStates = {};
        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        checkboxes.forEach((checkbox) =>
                           {
            checkboxStates[checkbox.value] = checkbox.checked;
        });

        localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    }

    function getSavedCheckboxState(employee)
    {
        let checkboxStates = JSON.parse(localStorage.getItem("checkboxStates"));
        return checkboxStates && checkboxStates[employee] ? checkboxStates[employee] : false;
    }

    async function notification()
    {
        let lunch = [];

        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        let currentHour = today.getHours().toString().padStart(2, '0');
        let currentMinute = today.getMinutes().toString().padStart(2, '0');
        let currentSecond = today.getSeconds().toString().padStart(2, '0');
        let currentTime = `${currentHour}:${currentMinute}:${currentSecond}`

        if (currentTime >= "11:00:00" && currentTime < "11:30:00")
        {
            lunch.push("Vanessa");
        }
        else if (currentTime >= "11:30:00" && currentTime < "12:00:00")
        {
            lunch.push("Vanessa");
            lunch.push("Dimas");
            lunch.push("Ewerton");
        }
        else if (currentTime >= "12:00:00" && currentTime < "12:30:00")
        {
            lunch.push("Dimas");
            lunch.push("Ewerton");
            lunch.push("Jéssica");
            lunch.push("Bonin");
            lunch.push("Ligia");
            lunch.push("Flávia");
        }
        else if (currentTime >= "12:30:00" && currentTime < "13:00:00")
        {
            lunch.push("Jéssica");
            lunch.push("Bonin");
            lunch.push("Ligia");
            lunch.push("Flávia");
        }
        else if (currentTime >= "13:00:00" && currentTime < "14:00:00")
        {
            lunch.push("Larissa");
            lunch.push("Rafael");
            lunch.push("Mattos");
            lunch.push("Marcelo");
            lunch.push("Cinthia");
        }

        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                let employee = checkbox.value;
                if (checkbox.checked) {
                    absentEmployees.push(employee);
                } else {
                    let index = absentEmployees.indexOf(employee);
                    if (index !== -1) {
                        absentEmployees.splice(index, 1);
                    }
                }
                saveCheckboxState();
            });
            let savedState = getSavedCheckboxState(checkbox.value);
            checkbox.checked = savedState;
            if (savedState)
            {
                absentEmployees.push(checkbox.value);
            }
        });

        lunch = [...new Set(lunch)];
        absentEmployees = [...new Set(absentEmployees)];

        let availableEmployees = employees.filter(employee => !lunch.includes(employee))
        availableEmployees = availableEmployees.filter(employee => !absentEmployees.includes(employee))
        let attendingList = availableEmployees;


        let index = -1;
        let position = "";

        for (let i = 0; i < availableEmployees.length; i++)
        {
            if (availableEmployees[i] === servidor)
            {
                index = i;
                break;
            }
        }

        switch (index)
        {
            case 0:
            case 1:
            case 2:
                position = "Fixo";
                break;
            case 3:
                position = "20 minutos ou 10 na fila (Suplente 1)";
                break;
            case 4:
                position = "30 minutos ou 25 na fila (Suplente 2)";
                break;
            case 5:
                position = "30 minutos ou 25 na fila (Suplente 3)";
                break;
            case 6:
                position = "Suplente 4";
                break;
            case 7:
                position = "Suplente 5";
                break;
            case 8:
                position = "Suplente 6";
                break;
            case 9:
                position = "Suplente 7";
                break;
            case 10:
                position = "Suplente 8";
                break;
        }

        if (document.querySelector("#servico-1 > ul").children[0] === undefined)
        {
            attendingList = availableEmployees.slice(0, 3);
            document.querySelector("head > title").innerHTML = "[0] Fila vazia";
            if (index !== -1)
            {
                document.querySelector("body > div.container > div > div.header > p").innerText = `[0] Fila vazia | Sua posição atual é: ${position}`;
            }
            else
            {
                document.querySelector("body > div.container > div > div.header > p").innerText = `[0] Fila vazia | Você está no seu horário de almoço ou ausente`;
            }
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");

            console.log(`Funcionários ausentes: ${absentEmployees}`);
            console.log(`Funcionários em horário de almoço: ${lunch}`);
            console.log(`funcionários disponíveis: ${availableEmployees}`);
            console.log(`Funcionários atendendo: ${attendingList}`);
            console.log(`Tempo de espera: Fila vazia`);
            await sleep(7000);
            return notification();
        }

        let largestTime = latestTime(passwords());
        await sleep(7000);
        let waitTime = latestTime(passwords());
        let minutes = parseInt(waitTime[3] + waitTime[4]);
        let queue = document.querySelector("#servico-1 > ul").childElementCount;

        console.log(`Funcionários ausentes: ${absentEmployees}`);
        console.log(`Funcionários em horário de almoço: ${lunch}`);
        console.log(`Funcionários disponíveis: ${availableEmployees}`);

        if (largestTime === waitTime)
        {
            attendingList = availableEmployees.slice(0, 3);
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");
            console.log(`Funcionários atendendo: ${attendingList}`);
        }
        else if (currentTime >= "16:00:00")
        {
            attendingList = availableEmployees.slice(2, 9);
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");
            console.log(`Funcionários atendendo: ${attendingList}`);
        }
        else if (waitTime >= "00:30:00" || queue >= 25)
        {
            attendingList = availableEmployees.slice(0, 6);
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");
            console.log(`Funcionários atendendo: ${attendingList}`);
        }
        else if (waitTime >= "00:20:00" || queue >= 10)
        {
            attendingList = availableEmployees.slice(0, 4);
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");
            console.log(`Funcionários atendendo: ${attendingList}`);
        }
        else
        {
            attendingList = availableEmployees.slice(0, 3);
            document.querySelector("body > div.container > div > div.header > h2").innerText = attendingList.join(" | ");
            console.log(`Funcionários atendendo: ${attendingList}`);
        }


        if (largestTime === waitTime)
        {
            document.querySelector("head > title").innerHTML = "[0] Fila vazia";
            document.querySelector("body > div.container > div > div.header > p").innerText = `[0] Fila vazia | Sua posição atual é: ${position}`;
            console.log(`Tempo de espera: Fila Vazia`);
        }
        else
        {
            document.querySelector("head > title").innerHTML = `[${queue}] ${waitTime}`;
            if (index !== -1)
            {
                if (currentTime >= "16:00:00")
                {
                    if (attendingList.includes(servidor))
                    {
                        document.querySelector("body > div.container > div > div.header > p").innerText = `[${queue}] Tempo de espera: ${waitTime} | Atenção: Ir pro guichê e finalizar os atendimentos!`;
                    }
                    else
                    {
                        document.querySelector("body > div.container > div > div.header > p").innerText = `[${queue}] Tempo de espera: ${waitTime} | Expediente sendo encerrado...`;
                    }
                }
                else
                {
                    document.querySelector("body > div.container > div > div.header > p").innerText = `[${queue}] Tempo de espera: ${waitTime} | Sua posição atual é: ${position}`;
                }
            }
            else
            {
                document.querySelector("body > div.container > div > div.header > p").innerText = `[${queue}] Tempo de espera: ${waitTime} | Você está no seu horário de almoço ou ausente`;
            }
            console.log(`Tempo de espera: ${waitTime}`);
        }

        console.log('\n'.repeat(38));

        if (attendingList.includes(servidor) && largestTime !== waitTime)
        {
            new Notification("Atenção! Ir pro guichê!");
            return notification();
        }
        else
        {
            return notification();
        }
    }
    return notification();
}
main();
