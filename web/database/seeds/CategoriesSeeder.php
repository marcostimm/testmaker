<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i=0; $i < 10; $i++) { 
            DB::table('category')->insert(
                [
                    'name'          => $faker->sentence(4, true),
                    'slug'          => $faker->word()
                ]
            ); 
        }
    }
}
