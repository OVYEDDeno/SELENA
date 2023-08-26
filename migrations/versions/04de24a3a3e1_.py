"""empty message

Revision ID: 04de24a3a3e1
Revises: a33151d50ffd
Create Date: 2023-08-26 14:32:24.802889

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '04de24a3a3e1'
down_revision = 'a33151d50ffd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('host')
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('room_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'room', ['room_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('room_id')

    op.create_table('host',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('Name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='host_pkey'),
    sa.UniqueConstraint('Name', name='host_Name_key')
    )
    # ### end Alembic commands ###