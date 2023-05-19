export * from './numbers';
export * from './general';
export * from './transforms';
/**
 * Sees if the next value matches the given predicate. If not, the event is prevented. Can be used with the `beforeinput` event.
 * @param predicate The predicate to match.
 */
export declare const validate: (predicate: (element: any) => boolean) => (evt: InputEvent) => void;
