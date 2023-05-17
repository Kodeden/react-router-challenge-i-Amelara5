function initLetterGroups() {
  return Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  ).reduce((groups, letter) => {
    groups[letter] = [];
    return groups;
  }, {});
}

function getFirstLetterOfLastName(name) {
  const names = name.split(" ");
  return names[names.length - 1][0];
}

export const groupContactsByLetterUsingLastNames = (contacts) => {
  return contacts.reduce((groups, contact) => {
    const firstLetterOfLastName = getFirstLetterOfLastName(contact.name);
    groups[firstLetterOfLastName] = [
      ...(groups[firstLetterOfLastName] || []),
      contact,
    ];
    return groups;
  }, initLetterGroups());
};
