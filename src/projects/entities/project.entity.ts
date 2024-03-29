import { Entity, Column, PrimaryColumn } from 'typeorm';
import crypto from 'crypto';

export enum ProjectStatus {
  Pending = 'pending',
  Active = 'active',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

@Entity()
export class Project {
  @PrimaryColumn()
  id: string; //uuid

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'datetime' })
  started_at: Date | null; //

  @Column({ nullable: true, type: 'datetime' })
  cancelled_at: Date | null; //

  @Column({ nullable: true, type: 'datetime' })
  finished_at: Date | null; //

  @Column({ nullable: true, type: 'datetime' })
  forecasted_at: Date | null; //

  @Column({ type: 'simple-enum' })
  status: ProjectStatus = ProjectStatus.Pending;

  constructor(
    props: {
      name: string;
      description: string;
      started_at?: Date | null;
      cancelled_at?: Date | null;
      forecasted_at?: Date | null;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();

    if (props?.started_at) {
      this.start(props.started_at);
    }
  }
  start(started_at: Date) {
    if (this.status === ProjectStatus.Active)
      throw new Error('cannot start active project');

    if (this.status === ProjectStatus.Completed)
      throw new Error('cannot start complete project');

    if (this.status === ProjectStatus.Cancelled)
      throw new Error('cannot cancel cancelled project');

    this.started_at = started_at;
    this.status = ProjectStatus.Active;
  }
}
