class AddUuidToMessages < ActiveRecord::Migration
  def change
    change_table :messages do |t|
      t.string :uuid
    end
  end
end
