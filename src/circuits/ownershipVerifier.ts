import { Id, DID } from 'js-iden3-core-custom';

export abstract class IDOwnershipPubSignals {
  userId!: Id;
  challenge!: bigint;
  async verifyIdOwnership(sender: string, challenge: bigint): Promise<void> {
    const senderId = DID.idFromDID(DID.parse(sender));
    if (senderId.string() !== this.userId.string()) {
      throw new Error(
        `sender id is not used for proof creation, expected ${senderId}, user from public signals: ${this.userId.string()}`
      );
    }
    if (challenge !== this.challenge) {
      throw new Error(
        `challenge is not used for proof creation, expected ${challenge}, challenge from public signals: ${this.challenge}  `
      );
    }
  }
}
