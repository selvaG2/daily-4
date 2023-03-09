function Input() {
    const firstname = document.getElementById("first").value;
    const secondname = document.getElementById("second").value;
    const dob = document.getElementById("dob").value;
    const father = document.getElementById("father").value;
    const address = document.getElementById("exampleFormControlTextarea1").value;
    const phnumber = document.getElementById("phonenumber").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("inputEmail").value;
    const college = document.getElementById("college").value;
    const mark = document.getElementById("mark").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    var maleRadio = document.getElementById("flexRadioDefault1");
    var femaleRadio = document.getElementById("flexRadioDefault2");
    var othersRadio = document.getElementById("flexRadioDefault3");
    var gender = "";
    var values = "";

    if (maleRadio.checked) {
        gender = "male";
    } else if (femaleRadio.checked) {
        gender = "female";
    } else if (othersRadio.checked) {
        gender = "others";
    } else {
        alert("Check the gender");
    }

    if (checkedCount >= 2) {
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                values+=" "+checkbox.value + "";
            }
        });
    }

    if (!/^[a-zA-Z\s]+$/.test(firstname)) {
        alert("First name should contain only alphabets and space");
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(secondname)) {
        alert("Second name should contain only alphabets and space");
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(father)) {
        alert("Father name should contain only alphabets and space");
        return false;
    } else if (!/^[a-zA-Z0-9\s\-\.,#]+$/.test(address)) {
        alert("Address should contain only required format");
        return false;
    } else if (!/^\d{10}$/.test(phnumber)) {
        alert("Phone number should contain 10 numbers");
        return false;
    } else if (!/^\d{2}-\d{3}-\d{6}$/.test(telephone)) {
        alert("Telephone number should contain format [99-999-999999 format]");
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("E-Mail should contain required format");
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(college)) {
        alert("College should contain only alphabets and space");
        return false;
    } else if (!/^\d{3}\.\d{2}$/.test(mark)) {
        alert("Mark should contain the required format [ 999.99 ]");
        return false;
    } else if (checkedCount < 2) {
        alert('Check more than two checkbox is checked');
        return false;
    }else {
        console.log(`Name of the student :${firstname}${secondname}`);
        console.log(`Date of birth       :${dob}`);
        console.log(`Gender              :${gender}`);
        console.log(`Father name         :${father}`);
        console.log(`Address             :${address}`);
        console.log(`Mobile number       :${phnumber}  Phone number :${telephone}`);
        console.log(`Email-id            :${email}`);
        console.log(`College name        :${college}`);
        console.log(`Mark scored         :${mark}`);
        console.log(`Personal interest   :${values}`);
    }

}
