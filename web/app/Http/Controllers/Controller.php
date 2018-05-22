<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Pagination\LengthAwarePaginator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Method conformPagination
     *
     * @param object $result Object with pagination results
     *
     * @return array with pagination pattern
     * @throws exception 
     * @access public
     */
    public function conformPagination(LengthAwarePaginator $result)
    {
        $result = $result->toArray();
        unset($result['last_page_url']);
        unset($result['next_page_url']);
        unset($result['prev_page_url']);
        unset($result['first_page_url']);
        unset($result['path']);

        return $result;
    }
}
