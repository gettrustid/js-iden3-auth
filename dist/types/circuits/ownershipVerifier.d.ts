import { Id } from 'js-iden3-core-custom';
export declare abstract class IDOwnershipPubSignals {
    userId: Id;
    challenge: bigint;
    verifyIdOwnership(sender: string, challenge: bigint): Promise<void>;
}
