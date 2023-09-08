import Subscriber from './Subscriber';

class Publisher {
  // List of subscribers
  private subscribers: Subscriber[] = [];

  constructor() {
    const publisherEle = document.getElementById('publisher') as HTMLInputElement;

    // When the input value changes, it notifies subscribers with a message.
    publisherEle.addEventListener('input', () => {
      this.notifySubscribers(`📢 Publisher message: Current value ${publisherEle.value}`);
    });
  }

  // Subscribe a Subscriber to the Publisher.
  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  // Notify subscribers with a message.
  private notifySubscribers(message: string) {
    this.subscribers.forEach(subscriber => subscriber.react(message));
  }
}

export default Publisher;
