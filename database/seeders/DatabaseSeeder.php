<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Idea;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        User::factory()->create([
            'email' => 'i@admin.com',
            'password' => bcrypt('123456')
        ]);
        Idea::factory(100)->create();
    }
}
