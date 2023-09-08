class Subscriber {
  constructor(private id: number) {}

  // React to the message provided by the Publisher.
  react(message: string) {
    const subscriberEle = document.getElementById(`subscriber-${this.id}`) as HTMLDivElement;
    subscriberEle.textContent = message;
  }
}

export default Subscriber;
