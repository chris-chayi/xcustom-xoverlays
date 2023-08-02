import {Animation, createAnimation} from '@ionic/angular';

export const modalEnterAnimation = (
    baseEl: HTMLElement,
    presentingEl?: HTMLElement,): Animation => {
    const root = baseEl.shadowRoot;
    console.log(`baseEl.innerHTML=${baseEl.innerHTML}`);


    const backdropAnimation = createAnimation()
        .addElement(root.querySelector('ion-backdrop')!)
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
            'pointer-events': 'none'
        })
        .afterClearStyles(['pointer-events']);

    const wrapperAnimation = createAnimation()
        .addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')!)
        .beforeStyles({'opacity': 1})
        .keyframes([
            {offset: 0, transform: 'translateY(-100vh)'},
            {offset: 0.4, transform: 'translateY(30vh)'},
            {offset: 0.7, transform: 'translateY(-15vh)'},
            {offset: 1, transform: 'translateY(0vh)'},
        ]);

    const baseAnimation = createAnimation()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(1200)
        .addAnimation([wrapperAnimation, backdropAnimation]);

    return baseAnimation;
};
