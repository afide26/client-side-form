const checkBox = document.getElementById('petCheckbox');
const selectionDivs = document.querySelectorAll('.petSelection');
const saveForm = document.getElementById('saveForm');
const messageModal = document.getElementById('message-modal');
const messageContent = document.getElementById('modal-content');

function addFlex() {
  return (
    Object.assign(messageModal.style, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: '100',
      position: 'absolute',
      alignItems: 'center',
      background: 'rgba(0,0,0,0.7)',
      height: '100vh',
      width: '100vw',
      transition: '0.3s ease-in'
    })
  )
}
messageModal.addEventListener('click', function (e) {
  e.preventDefault();
  Object.assign(this.style, {
    display: 'none',
    transition: '1s ease-in'
  });
  messageContent.innerHTML = '';
  return;
})
checkBox.addEventListener('change', function (e) {
  e.preventDefault();

  if (checkBox.checked) {
    selectionDivs[0].style.display = "Block";
    selectionDivs[1].style.display = "Block";
  } else {
    selectionDivs[0].style.display = "none";
    selectionDivs[1].style.display = "none";
  }
});

saveForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let nameText = saveForm.elements[0].value;
  let addressText = saveForm.elements[1].value;
  let ageText = saveForm.elements[2].value;
  let doesHavePet = saveForm.elements[3].checked;
  let petText = "No Pets";

  if (nameText == '') {
    addFlex();
    const textMessage = document.createElement("P");

    var text = document.createTextNode("Enter your name");
    messageContent.append(text);
    return;
  }

  if (addressText == '') {
    addFlex();
    const textMessage = document.createElement("P");

    var text = document.createTextNode("Enter your address");
    messageContent.append(text);
    return;
  }

  if (ageText == '') {
    addFlex();
    const textMessage = document.createElement("P");

    var text = document.createTextNode("Enter your age");
    messageContent.append(text);
    return;
  }

  if (doesHavePet) {
    petAnswer = saveForm.elements[4].value;
    petText = petAnswer.charAt(0).toUpperCase() + petAnswer.substr(1);
  }
  console.log(`Booking saved: Info \n Name: ${nameText}\n Address:${addressText} \n Age:${ageText} \n Pet: ${petText}`);

  addFlex();
  const textMessage = document.createElement("P");

  var text = document.createTextNode("Your form has been submitted.");
  messageContent.append(text);
  saveForm.reset();
})