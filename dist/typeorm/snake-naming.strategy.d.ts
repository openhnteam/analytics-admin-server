import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
export declare class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    tableName(className: string, customName: string): string;
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string;
    relationName(propertyName: string): string;
    joinColumnName(relationName: string, referencedColumnName: string): string;
    joinTableName(firstTableName: string, secondTableName: string, firstPropertyName: string, secondPropertyName: string): string;
    joinTableColumnName(tableName: string, propertyName: string, columnName?: string): string;
    classTableInheritanceParentColumnName(parentTableName: any, parentTableIdPropertyName: any): string;
    eagerJoinRelationAlias(alias: string, propertyPath: string): string;
}
