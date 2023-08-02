import { Animation, createAnimation } from '@ionic/angular';

export const alertEnterAnimation = (baseEl: HTMLElement): Animation => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();

    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
            'pointer-events': 'none'
        })
        .afterClearStyles(['pointer-events']);

    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0.01', transform: 'scale(0)' },
            { offset: 1, opacity: '1', transform: 'scale(1)' }
        ]);

    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};