import Publisher from './Publisher.js';
import Subscriber from './Subscriber.js';

// Usage
const publisher = new Publisher();
publisher.subscribe(new Subscriber(1));
publisher.subscribe(new Subscriber(2));
