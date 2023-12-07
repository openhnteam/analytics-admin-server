import { EntityManager, EntityTarget, Repository } from 'typeorm';
export declare class EntityFactory {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    createEntity<T>(enyity: EntityTarget<T>, table: string): Repository<T>;
}
