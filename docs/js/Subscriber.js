class Subscriber {
    id;
    constructor(id) {
        this.id = id;
    }
    react(message) {
        const subscriberEle = document.getElementById(`subscriber-${this.id}`);
        subscriberEle.textContent = message;
    }
}
export default Subscriber;
//# sourceMappingURL=Subscriber.js.map