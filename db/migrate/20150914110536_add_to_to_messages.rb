class AddToToMessages < ActiveRecord::Migration
  def change
    change_table :messages do |t|
      t.string :to
    end
  end
end
