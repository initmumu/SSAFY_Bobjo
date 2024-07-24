function assignGroups() {
    const names = [
        "\uAC15\uC9C4\uC8FC",
        "\uAD8C\uBBFC\uCC44",
        "\uAE40\uC218\uBBFC",
        "\uAE40\uC218\uD604",
        "\uAE40\uC9C0\uBBFC",
        "\uAE40\uD0DC\uC601",
        "\uBB38\uC9C4\uC218",
        "\uBC15\uB3D9\uBBFC",
        "\uBC15\uC885\uD558",
        "\uBC15\uCC3D\uC870",
        "\uBC30\uC2B9\uD638",
        "\uBC31\uBA85\uADDC",
        "\uC5C4\uC608\uB9BC",
        "\uC724\uC11C\uD76C",
        "\uC774\uB0A8\uC7AC",
        "\uC774\uC131\uC900",
        "\uC774\uC7AC\uBC31",
        "\uC774\uC7AC\uD64D",
        "\uC774\uC8FC\uD604",
        "\uC774\uD61C\uC778",
        "\uC804\uC885\uC6B0",
        "\uCD5C\uC6D0\uC11C",
        "\uCD5C\uC900\uD601",
        "\uD55C\uC885\uC6B0"
    ];
    const numGroups = 6;
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(Date.now() - offset);
    const seed = parseInt(date.toISOString().split('T')[0].replace(/-/g, ''));

    const random = mulberry32(seed);
    const shuffledNames = shuffleArray(names, random);

    const groups = [];
    for (let i = 0; i < numGroups; i++) {
        groups.push([]);
    }

    shuffledNames.forEach((name, index) => {
        groups[index % numGroups].push(name);
    });


    for (let i = 0; i < numGroups; i++) {
        groups[i].sort();
    }

    let day = [date.getMonth() + 1, date.getDate()];
    return [groups, day];    
}

function mulberry32(a) {
    return function() {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function shuffleArray(array, random) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayGroups(groups, day) {
    const title_dom = document.getElementById("title_msg");
    const time_display = document.getElementById("time_display");
    title_dom.innerHTML = `🍚16반 밥 같이 먹어요🍚`
    time_display.innerHTML = `📆오늘은 ${day[0]}월 ${day[1]}일~`

    // title_dom.innerHTML = `🍚${day[0]}월 ${day[1]}일 밥 같이 먹어요🍚`;
    const groupsDiv = document.getElementById("groups");
    groupsDiv.innerHTML = '';
    groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.classList.add("group")
        groupDiv.textContent = `${index + 1}조 ➡ ${group.join("\t")}`;
        groupsDiv.appendChild(groupDiv);
    });
}

function copyText() {
    let textToCopy = `### :party_blob: :rice: ${gad[1][0]}월 ${gad[1][1]}일 밥 같이 먹어요 :rice: :party_blob: :cat_feed:
`;

    for (let i = 0; i < gad[0].length; i++) {
        textToCopy += `${i+1}조\t➡\t`
        for(let j = 0; j < gad[0][i].length; j++) {
            textToCopy += `${gad[0][i][j]}\t`
        }
        textToCopy += `
`
    }
    // Create a temporary textarea element to hold the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
    showToast()
}

function showToast() {
    var toast = document.getElementById("copy_btn_label");
    toast.innerHTML = "복사되었습니다!"
    setTimeout(function() {
        toast.innerHTML = "복사 하기";
    }, 3000);
}
let gad = assignGroups();
displayGroups(gad[0], gad[1]);
