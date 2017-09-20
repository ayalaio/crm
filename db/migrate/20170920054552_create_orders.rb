class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string   :page_name
      t.string   :page_url
      t.string   :variant
      t.string   :ip
      t.string   :day_week
      t.string   :day_period
      t.integer  :quantity
      t.string   :state
      t.string   :customer_name
      t.string   :city
      t.string   :neighborhood
      t.string   :street_name
      t.string   :street_number
      t.string   :phone_number
      t.string   :desktopmobile
    end
  end
end


# {"page_id"=>7356961, "page_name"=>"EsNaturalia", "page_url"=>"esnaturalia.pagedemo.co", "variant"=>"A", "ip"=>"24.23.216.101", "day_week"=>"Miercoles", "day_period"=>"Manana", "quantity"=>"2 Meses X $400", "state"=>"Distrito Federal", "name"=>"wer5e", "city"=>"tretre", "neighborhood "=>"erttreret", "street_name"=>"rteter", "street_number"=>"rteetretrtre", "phone_number"=>"trettrert", "pageshown"=>"A", "variationshown"=>"EsNaturalia", "desktopmobile"=>"Desktop", "timestamp"=>"20 September 2017 05:44 UTC", "ipaddress"=>"24.23.216.101"}
