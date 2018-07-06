<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HttpTest extends TestCase
{
    /** @test */
    public function homeRedirectLoginOrDashboard()
    {
        $response = $this->get('/');
        $response->assertStatus(301);
    }

    /** @test */
    public function loginPage()
    {
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

}
