document.getElementById('submit').addEventListener('click', calculateFlames);

function calculateFlames() {
    let name1 = document.getElementById('name').value.trim().toLowerCase();
    let name2 = document.getElementById('crush').value.trim().toLowerCase();

    // Validation
    if (!name1 || !name2) {
        myname.innerText = 'Please fill out both names to find 💖';
        return;
    }

    // Strip out spaces
    name1 = name1.replace(" ", "");
    name2 = name2.replace(" ", "");

    // Eliminate common characters
    let list1 = name1.split('');
    let list2 = name2.split('');
 
            

    for (let i = 0; i < list1.length; i++) {
        let index = list2.indexOf(list1[i]);
        if (index !== -1) {
            list1[i] = '';
            list2[index] = '';
        }
    }

    // Calculate total count of remaining letters
    const remainingCount = (list1.join('') + list2.join('')).length;

    // FLAMES processing logic
    let flames = ['Friends 🤝', 'Love ❤️', 'Affection 🌟', 'Marriage 💍', 'Enemy ⚡', 'Sister 🌸'];
    
    if (remainingCount > 0) {
        let index = 0;
        while (flames.length > 1) {
            index = (index + remainingCount - 1) % flames.length;
            flames.splice(index, 1);
        }
    }

    // Output result
    myname.innerText = `Hi ${name1}`;
    usercrush.innerText = `Your Crush is ${name2}💕`;
    hidden.style.display = 'block';

    
    result.innerText = flames[0];
    
}
