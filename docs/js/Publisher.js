class Publisher {
    subscribers = [];
    constructor() {
        const publisherEle = document.getElementById('publisher');
        publisherEle.addEventListener('input', () => {
            this.notifySubscribers(`📢 Publisher message: Current value ${publisherEle.value}`);
        });
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    notifySubscribers(message) {
        this.subscribers.forEach(subscriber => subscriber.react(message));
    }
}
export default Publisher;
//# sourceMappingURL=Publisher.js.map