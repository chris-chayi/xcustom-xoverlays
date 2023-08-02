import { Animation, createAnimation } from '@ionic/angular';

export const alertLeaveAnimation = (baseEl: HTMLElement): Animation => {
    const baseAnimation = createAnimation();
    const backdropAnimation = createAnimation();
    const wrapperAnimation = createAnimation();
  
    backdropAnimation
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', 'var(--backdrop-opacity)', 0);
  
    wrapperAnimation
      .addElement(baseEl.querySelector('.alert-wrapper')!)
      .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0)' }
      ]);
  
    return baseAnimation
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(400)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };