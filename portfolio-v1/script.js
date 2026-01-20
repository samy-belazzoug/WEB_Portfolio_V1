function createFloatingElement(text) {
    // CREATE AND ANIMATE A FLOATTING ELEMENT
    const div = document.createElement('div');
    div.className = 'floating-text';
    div.textContent = text;
    div.style.fontFamily = 'var(--font2)'
    div.style.fontStyle = 'italic'
    
    // RANDOM VERTICAL POSITION (between 0-header height - 50px)
    const randomTop = Math.random() * (document.querySelector('.header').offsetHeight - 50);
    div.style.top = `${randomTop}px`;
    
    // RANDOM DURATION (2-4 seconds)
    const randomDuration = 3 + Math.random() * 3;
    div.style.animationDuration = `${randomDuration}s`;
    
    // DECIDE IF ELEMENT SLIDE FROM LEFT TO RIGHT OR RIGHT TO LEFT
    const direction = Math.random() < 0.6 ? 'slideRight' : 'slideLeft';
    div.style.animationName = direction;

    document.querySelector('.header').appendChild(div);
    
    // GET RID OF THE ELEMENT AFTER ANIMATION
    setTimeout(() => {
        div.remove();
    }, randomDuration * 1000);
}

// WORD LIST
const skills = [
    'Hello, World!',
    'Python3',
    'sys.exit()',
    '[x for x in l if x % 2 == 0]',
    'import sys',
    'C++',
    'vector<string> planes',
    'class Car {}',
    'C',
    'gcc -Wall -Werror test.c -o test',
    'free(&a)',
    'return 0;',
    'C#',
    'Rust',
    'cargo run',
    'Unity',
    'BoxCollider2D',
    'version control',
    'Git',
    'git add Car.cpp',
    'git checkout -b',
    'shell linux',
    'ls -la',
    'cd ..',
    'env',
    'man execve()',
    'shared memory',
    'dynamic allocation',
    'static',
    '0x112b8e',
    '0x178392',
    '0x21a32b',
    '0x884e7d'

];

// SPAWN A RANDOM ELEMENT EVERY 2 SECONDS
setInterval(() => {
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
    createFloatingElement(randomSkill);
}, 1000);

// SPANW 2 ELEMENTS ON THE LOADING
createFloatingElement('Hello, World!');
setTimeout(() => createFloatingElement('0x178392'), 500);